import debug from 'debug'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {middleware as reduxPackMiddleware} from 'redux-pack'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'
import devTools from '../dev-tools'

const dbg = debug('app:store:dev')

export default () => {
  dbg('root-reducer=%o', rootReducer)

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
        promiseMiddleware,
        reduxPackMiddleware,
        createLogger({
          collapsed: true
        })
      ),
      devTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    dbg('enabling webpack hot replacement...')
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
