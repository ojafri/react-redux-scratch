// see: https://github.com/erikras/ducks-modular-redux
//
import {createAction, handleActions} from 'redux-actions'
import {handle} from 'redux-pack'
import debug from 'debug'
import _ from 'lodash'
import isAuthorized from './is-authorized'
import auth from '.'

const dbg = debug('lib:auth:get-auth-redux')

const LOGIN = 'auth/login'
const LOGOUT = 'auth/logout'
const RESOLVE_ROUTE = 'auth/resolve-route'

function parseScope({scope, scopeDelimiter}) {
  dbg('parse-scope: args=%o', arguments[0])
  return scope ? scope.split(scopeDelimiter) : []
}

export default function({postAuthLocation, impl, onNotAuthorized}) {
  dbg('args=%o, auth=%o', arguments[0], auth)
  const scopeClaim = impl.scopeClaim || 'scope'
  const scopeDelimiter = impl.scopeDelimiter || ' '
  const scopePath = `session.token.decoded.${scopeClaim}`

  return {
    scopePath,
    actions: {
      login: ({history, target}) => {
        dbg('login-action: history=%o, target=%o', history, target)
        return {
          type: LOGIN,
          promise: impl.login(),
          meta: {
            onSuccess: result => {
              dbg('login: on-success: result=%o', result)
              const {decoded} = result
              let _target
              if (target) {
                _target = target
              } else {
                if (_.isFunction(postAuthLocation)) {
                  _target = postAuthLocation({token: decoded})
                } else if (_.isString(postAuthLocation)) {
                  _target = postAuthLocation
                } else {
                  throw new TypeError(`unexpected type for post-auth-location=${postAuthLocation}`)
                }
              }
              const {location} = history
              dbg(
                'login: on-success: decoded=%o, location=%o, target=%o',
                decoded,
                location,
                _target
              )
              if (_target != location) {
                history.push(_target)
              }
            }
          }
        }
      },
      logout: target => {
        dbg('logout-action: target=%o', target)
        return {
          type: LOGOUT,
          promise: impl.logout(),
          meta: {
            onSuccess: () => {
              dbg('logout: on-success')
            }
          }
        }
      },
      resolveRoute: path => {
        dbg('resolve-route-action: path=%o', path)
        return (dispatch, getState) => {
          dbg('resolve-route-thunk: path=%o', path)
          const state = getState()
          const {resolvedRoutes} = state.session
          const scope = parseScope({scope: _.get(state, scopePath), scopeDelimiter})
          const result = isAuthorized({path, rules: auth.rules, scope, resolvedRoutes})
          dispatch(createAction(RESOLVE_ROUTE)({[path]: result}))
          return result
        }
      },
      onNotAuthorized: path => {
        dbg('on-not-authorized-action: path=%o', path)
        return dispatch => {
          dbg('on-not-authorized-thunk: path=%o', path)
          onNotAuthorized({path, dispatch})
        }
      }
    },
    reducer: handleActions(
      {
        [LOGIN]: (state, action) =>
          handle(state, action, {
            start: () => ({
              ...state,
              active: true,
              target: action.payload
            }),
            success: () => {
              dbg('login-success: state=%o, action=%o', state, action)
              const token = action.payload
              const {decoded} = token
              const scope = parseScope({scope: decoded[scopeClaim], scopeDelimiter})
              const {rules} = auth
              let {resolvedRoutes} = state
              resolvedRoutes = _.transform(resolvedRoutes, (result, val, key) => {
                result[key] = isAuthorized({path: key, rules, scope, resolvedRoutes})
              })
              dbg('resolved-routes=%o', resolvedRoutes)
              return {
                ...state,
                token,
                resolvedRoutes,
                active: false,
                target: null
              }
            }
          }),
        [LOGOUT]: (state, action) =>
          handle(state, action, {
            start: _state => ({
              ..._state,
              active: true,
              target: action.payload
            }),
            success: _state => ({
              ..._state,
              active: false,
              token: null,
              resolvedRoutes: {}
            })
          }),
        [RESOLVE_ROUTE]: (state, action) => {
          dbg('reducer: resolve-route: state=%o, action=%o', state, action)
          return {
            ...state,
            resolvedRoutes: {...state.resolvedRoutes, ...action.payload}
          }
        }
      },
      {
        active: false,
        token: null,
        target: null,
        recentHistory: [],
        resolvedRoutes: {}
      }
    )
  }
}
