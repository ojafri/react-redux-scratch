import debug from 'debug'
import React from 'react'
import {Router} from 'react-router'
import DevTools from '../dev-tools'
import routes from '../router/routes'

const dbg = debug('app:router:dev')

export default ({store, history}) => {
  dbg('render: arguments=%o', arguments[0])
  return (
    <div>
      <Router history={history}>
        {routes(store)}
      </Router>
      <DevTools />
    </div>
  )
}
