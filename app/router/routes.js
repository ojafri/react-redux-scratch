import React from 'react'
import {Route, IndexRoute} from 'react-router'
import debug from 'debug'
import Layout from '../layout/layout'
import Home from '../home/home'
import Stuff from '../stuff/stuff'
import Nonsense from '../nonsense/nonsense'

const dbg = debug('app:router:routes')

export default store => {
  dbg('store=%o', store)
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="stuff" component={Stuff} />
      <Route path="nonsense" component={Nonsense} />
    </Route>
  )
}
