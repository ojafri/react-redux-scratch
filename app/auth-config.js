import debug from 'debug'
import {toastr} from 'react-redux-toastr'
import {configure} from 'react-redux-auth'

const dbg = debug('app:auth-config')

configure({
  impl: {
    provider: 'auth0',
    options: {
      clientId: '3IM9Zk9sCMKTJokbo92bamt83R-tS9vT',
      domain: 'kerzilla.auth0.com',
      returnTo: 'http://localhost:8080',
      options: {
        theme: {
          logo: 'https://vignette4.wikia.nocookie.net/batman/images/7/74/BrokenBat.png'
        },
        languageDictionary: {
          title: 'kerzsoft'
        },
        allowSignUp: false
      }
    }
  },
  // roles can be a string, an array (or'd), or a function for custom
  rules: [
    {
      path: '/stuff',
      roles: roles => {
        return roles.includes('stuff')
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
  onNotAuthorized: ({path}) => {
    toastr.success('not authorized', `unable to visit route ${path}`)
  }
})
