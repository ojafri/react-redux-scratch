import 'babel-polyfill'
import React from 'react'
import debug from 'debug'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './app.scss'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {hashHistory} from 'react-router'
import configureStore from './store/configure-store'
import Router from './router/router'

const dbg = debug('app:index')

const store = configureStore({history: hashHistory})
const _history = syncHistoryWithStore(hashHistory, store)

dbg('history=%o, _history=%o, store=%o', history, _history, store)

render(
  <Provider store={store}>
    <Router history={_history} store={store} />
  </Provider>,
  document.getElementById('root')
)
