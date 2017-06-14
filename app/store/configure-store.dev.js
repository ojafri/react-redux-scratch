import debug from 'debug'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from '../reducers'
import devTools from '../dev-tools'

const dbg = debug('app:store:dev')

export default ({preloadedState, history}) => {
  dbg('root-reducer=%o', rootReducer)

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        promiseMiddleware,
        routerMiddleware(history),
        createLogger({
          collapsed: true
        })
      ),
      devTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
