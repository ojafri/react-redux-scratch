import debug from 'debug'
// import {
//   configure,
//   getHelloAuth as getAuth,
//   getOidcHelloProvider as getProvider
// } from 'react-redux-auth'
import config from 'config'
import {configure} from './auth'
import getAuth from './auth/get-auth-hello'
import getProvider from './auth/hello/keycloak'
import {openSnackbar} from './layout/layout-redux'

const dbg = debug('app:auth-config')

// options passed to get-keycloak-auth function obtained from keycloak admin
// see: https://keycloak.gitbooks.io/documentation/securing_apps/topics/oidc/javascript-adapter.html
//
configure({
  impl: getAuth({
    url: config.auth.url,
    domain: 'realm-1',
    clientId: 'client-1',
    redirectUri: 'http://localhost:8080',
    getProvider
  }),
  // roles can be a string, an array (or'd), or a function for custom
  rules: [
    {
      path: '/stuff',
      roles: roles => {
        return roles.includes('group-1')
      }
    },
    {
      path: '/such',
      roles: ['group-1']
    },
    {path: '/nonsense', roles: 'group-1'}
  ],
  postAuthLocation: ({token}) => {
    // can customize with function (e.g. based on roles)
    dbg('post-auth-location: token=%o', token)
    return 'stuff'
  },
  notAuthorizedLocation: '/',
  onFailure: openSnackbar
  // onError: ({path, dispatch}) => {
  //   dbg('on-error: route=%o, dispatch=%o', path, dispatch)
  //   dispatch(openSnackbar(`not authorized: unable to visit route ${path}`))
  // },
  // onNotAuthorized: ({path, dispatch}) => {
  //   dbg('on-not-authorized: unable to visit route=%o, dispatch=%o', path, dispatch)
  //   dispatch(openSnackbar(`not authorized: unable to visit route ${path}`))
  // }
})
