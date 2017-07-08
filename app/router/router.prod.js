import debug from 'debug'
import React from 'react'
import {Router, Route} from 'react-router-dom'
import Layout from '../layout/layout'

const dbg = debug('app:router:prod')

export default ({history}) => {
  dbg('render: history=%o', history)
  return (
    <div>
      <Router history={history}>
        <Route path="/" component={Layout} />
      </Router>
    </div>
  )
}
