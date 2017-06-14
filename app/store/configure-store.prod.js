import debug from 'debug'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from '../reducers'

const dbg = debug('app:store:prod')

export default ({preloadedState, history}) => {
  dbg('root-reducer=%o', rootReducer)

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware,
      routerMiddleware(history),
      createLogger({
        collapsed: true
      })
    )
  )
}
