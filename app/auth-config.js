import debug from 'debug'
// import {toastr} from 'react-redux-toastr'
// import {configure} from 'react-redux-auth'
import {configure} from './auth'
import getAuth from './auth/get-auth-hello'
// import getProvider from './auth/hello/azure'
import getProvider from './auth/hello/oidc'
import {openSnackbar} from './layout/layout-redux'

const dbg = debug('app:auth-config')

configure({
  impl: getAuth({
    // clientId: '2feff992-96e6-4420-86a4-1e25348a6d09',
    clientId: 'foo',
    // domain: 'anthonykerzgmail.onmicrosoft.com',
    // returnTo: 'http://lvh.me:8080/',
    returnTo: 'http://localhost:8080/',
    getProvider
    // scopeClaim: 'override-here',
    // scopeClaimDelimiter: ','
  }),
  // auth0
  // impl: getAuth(
  //   {
  //     // clientId: '3IM9Zk9sCMKTJokbo92bamt83R-tS9vT',
  //     // domain: 'kerzilla.auth0.com',
  //     // options: {
  //     //   theme: {
  //     //     logo: 'https://vignette4.wikia.nocookie.net/batman/images/7/74/BrokenBat.png'
  //     //   },
  //     //   languageDictionary: {
  //     //     title: 'kerzsoft'
  //     //   },
  //     //   allowSignUp: false
  //     // }
  //   }
  // ),
  // roles can be a string, an array (or'd), or a function for custom
  rules: [
    {
      path: '/stuff',
      roles: roles => {
        return roles.includes('admin')
      }
    },
    {path: '/nonsense', roles: 'nonsense'}
  ],
  postAuthLocation: ({token}) => {
    // can customize with function (e.g. based on roles)
    dbg('post-auth-location: token=%o', token)
    return 'stuff'
  },
  notAuthorizedLocation: '/',
  onNotAuthorized: ({path, dispatch}) => {
    dbg('on-not-authorized: unable to visit route=%o, dispatch=%o', path, dispatch)
    // toastr.success('not authorized', `unable to visit route ${path}`)
    dispatch(openSnackbar(`not authorized: unable to visit route ${path}`))
  }
})
