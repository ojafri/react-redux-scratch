import debug from 'debug'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'

const dbg = debug('app:store:prod')

export default () => {
  dbg('root-reducer=%o', rootReducer)

  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware,
      createLogger({
        collapsed: true
      })
    )
  )
}
