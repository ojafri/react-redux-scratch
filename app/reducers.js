import debug from 'debug'
import {combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import auth from 'react-redux-auth'

const dbg = debug('app:reducers')

const reducers = {
  session: auth.reducer,
  toastr: toastrReducer
}

dbg('reducers=%o', reducers)

export default combineReducers(reducers)
