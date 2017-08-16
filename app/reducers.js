import debug from 'debug'
import {combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
// import auth from 'react-redux-auth'
import auth from './auth'
import layoutReducer from './layout/layout-redux'

const dbg = debug('app:reducers')

const reducers = {
  session: auth.reducer,
  toastr: toastrReducer,
  layout: layoutReducer
}

dbg('reducers=%o', reducers)

export default combineReducers(reducers)
