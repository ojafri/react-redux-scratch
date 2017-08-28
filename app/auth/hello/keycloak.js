import debug from 'debug'

const dbg = debug('lib:auth:hello:keycloak')

export default function({returnTo}) {
  const base = 'http://localhost:9990/auth/realms/realm-1/protocol/openid-connect'
  // should: http://127.0.0.1:9990/auth/realms/realm-1/protocol/openid-connect/auth?client_id=client-1&redirect_uri=http%3A%2F%2Flocalhost%3A8080&state=c2c107d8-aa2d-4263-8a38-a595a4db2b60&nonce=6834a4b5-310d-46ee-ab24-f847e1445a26&response_mode=fragment&response_type=code&scope=openid
  // is: http://localhost:9990/auth/realms/realm-1/protocol/openid-connect/auth?client_id=client-1&response_type=id_token%20token&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&state=%7B%22client_id%22%3A%22client-1%22%2C%22network%22%3A%22provider%22%2C%22display%22%3A%22popup%22%2C%22callback%22%3A%22_hellojs_5k2englo%22%2C%22state%22%3A%22%22%2C%22redirect_uri%22%3A%22http%3A%2F%2Flocalhost%3A8080%2F%22%2C%22scope%22%3A%22basic%22%7D&scope=openid&nonce=1503921759861
  return {
    oauth: {
      version: 2,
      auth: `${base}/auth`,
      // hello doesn't seem to handle just "id_token" for response_type...
      response_type: 'id_token token',
      grant: `${base}/token`
    },
    scope: {
      basic: 'openid'
    },
    login: p => {
      dbg('login: p=%o', p)
      p.qs.nonce = new Date().getTime()
    },
    logout: p => {
      dbg('logout: p=%o', p)
      return `${base}/session/end?post_logout_redirect_uri=${returnTo}`
    },
    refresh: true,
    base: ''
  }
}
