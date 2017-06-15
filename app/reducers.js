import debug from 'debug'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import session from './session/session'

const dbg = debug('app:reducers')

const reducers = {
  routing: routerReducer,
  session
}

dbg('reducers=%o', reducers)

export default combineReducers(reducers)
