import debug from 'debug'
import React from 'react'
import {Router, Route} from 'react-router-dom'
import getHistory from 'history/createHashHistory'
import DevTools from '../dev-tools'
import Layout from '../layout/layout'

let dbg = debug('app:router:dev')

const history = getHistory()
dbg('history=%o', history)

history.listen((location, action) => {
  dbg('history-listener: location=%o, action=%o', location, action)
})

export default () => {
  dbg('render')
  return (
    <div>
      <Router history={history}>
        <Route path="/" component={Layout} />
      </Router>
      <DevTools />
    </div>
  )
}
