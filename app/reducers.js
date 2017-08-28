import debug from 'debug'
import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
// import auth from 'react-redux-auth'
import auth from './auth'
import layout from './layout/layout-redux'
import peopleRedux from './people/redux'

const dbg = debug('app:reducers')

const reducers = {
  session: auth.reducer,
  layout,
  form,
  people: peopleRedux.reducer
}

dbg('reducers=%o', reducers)

export default combineReducers(reducers)
