import 'babel-polyfill'
import React from 'react'
import debug from 'debug'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './app.scss'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
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
      <ReduxToastr />
    </div>
  </Provider>,
  document.getElementById('root')
)
