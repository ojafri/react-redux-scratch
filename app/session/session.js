import {LOCATION_CHANGE} from 'react-router-redux'
import {createAction, handleActions} from 'redux-actions'
import debug from 'debug'
// import _ from 'lodash'
import {loginImpl, logoutImpl} from './session-auth0'

const dbg = debug('app:session')

const LOGIN_BEGIN = 'session/login-begin'
const LOGIN = 'session/login'
const LOGOUT_BEGIN = 'session/logout-begin'
const LOGOUT = 'session/logout'
// const UPDATE_LOCATION = 'session/update-location'
// const PUSH_TARGET = 'session/push-target'

export const loginBegin = createAction(LOGIN_BEGIN)
export const login = target => {
  dbg('login-action: target=%o', target)
  return dispatch => {
    dbg('login-thunk: target=%o', target)
    dispatch(loginBegin(target))
    loginImpl({dispatch, action: LOGIN})
  }
}

export const logoutBegin = createAction(LOGOUT_BEGIN)
export const logout = target => {
  dbg('logout-action: target=%o', target)
  return dispatch => {
    dbg('logout-thunk: target=%o', target)
    dispatch(logoutBegin(target))
    logoutImpl({dispatch, action: LOGOUT})
  }
}

export default handleActions(
  {
    [LOGIN_BEGIN]: (state, action) => {
      dbg('reducer: login-begin: state=%o, action=%o', state, action)
      return {
        ...state,
        active: true,
        target: action.payload
      }
    },
    [LOGIN]: (state, action) => {
      dbg('reducer: login: state=%o, action=%o', state, action)
      return {
        ...state,
        active: false,
        token: action.payload
      }
    },
    [LOGOUT_BEGIN]: (state, action) => {
      dbg('reducer: logout-begin: state=%o, action=%o', state, action)
      return {
        ...state,
        active: true,
        target: action.payload
      }
    },
    [LOGOUT]: (state, action) => {
      dbg('reducer: logout: state=%o, action=%o', state, action)
      return {
        ...state,
        active: false,
        token: null
      }
    },
    [LOCATION_CHANGE]: (state, action) => {
      dbg('reducer: location-change: state=%o, action=%o', state, action)
      return state
      // const recentHistory = [...state.recentHistory]
      // // hold on to last two locations
      // if (recentHistory.length > 1) {
      //   recentHistory.shift()
      // }
      // recentHistory.push(action.payload)
      // return {
      //   ...state,
      //   recentHistory
      // }
    }
  },
  {
    active: false,
    token: null,
    target: null,
    recentHistory: []
  }
)
