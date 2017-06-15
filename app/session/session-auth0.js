import assert from 'assert'
import debug from 'debug'
import jwtDecode from 'jwt-decode'
import Auth0Lock from 'auth0-lock'
import {createAction} from 'redux-actions'

const dbg = debug('app:session:session-auth0-lock')

const lock = new Auth0Lock('LniHozdE4C2QWp77GzNKj1jWsa6IJKc3', 'kerz.auth0.com', {
  theme: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Aetna_logo_2012.png'
  },
  auth: {
    redirect: false
  },
  languageDictionary: {
    title: 'Phoenix Data Solutions'
  },
  allowSignUp: false
})

export function loginImpl({dispatch, action}) {
  lock.on('authenticated', function(authResult) {
    dbg('authenticated: auth-result=%o', authResult)
    const encoded = authResult.idToken
    assert(encoded, 'id-token required')
    const decoded = jwtDecode(encoded)
    dbg('authenticated: decoded-token=%o', decoded)
    dispatch(createAction(action)({encoded, decoded}))
  })

  lock.show()
}

export function logoutImpl({dispatch, action}) {
  lock.logout({returnTo: 'http://localhost:8080'})
  dispatch(createAction(action)())
}
