import debug from 'debug'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
// import session from './session/reducers'

const dbg = debug('app:reducers')

const reducers = {
  routing: routerReducer
}

dbg('reducers=%o', reducers)

export default combineReducers(reducers)
