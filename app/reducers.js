import debug from 'debug'
import {combineReducers} from 'redux'
import auth from 'react-redux-auth'
import {reducer as form} from 'redux-form'
// import auth from './auth'
import layout from './layout/layout-redux'
import partnersRedux from './partners/redux'

const dbg = debug('app:reducers')

const reducers = {
  session: auth.reducer,
  layout,
  form,
  partners: partnersRedux.reducer
}

dbg('reducers=%o', reducers)

export default combineReducers(reducers)
