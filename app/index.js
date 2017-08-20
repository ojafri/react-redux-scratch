import 'babel-polyfill'
import React from 'react'
import debug from 'debug'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// auth-config should be imported early (order matters for timing)
import './auth-config'
import configureStore from './store/configure-store'
import Router from './router/router'

const dbg = debug('app:index')

const store = configureStore()

dbg('store=%o', store)

render(
  <Provider store={store}>
    <div>
      <Router />
    </div>
  </Provider>,
  document.getElementById('root')
)
