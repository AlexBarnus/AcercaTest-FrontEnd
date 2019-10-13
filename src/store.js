import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from './reducers/vehiclesReducer'
import thunk from 'redux-thunk';



//const routerMiddleware = createRouterMiddleware(HashRouter)

//const composeEnhancers =
//  process.env.NODE_ENV !== 'production' &&
//  typeof window === 'object' &&
//  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//      // Specify here name, actionsBlacklist, actionsCreators and other options
//    }) : compose



const mainReducer = combineReducers({ vehicles: rootReducer });


const configureStore = (initialState) => {
    const store = createStore(mainReducer, initialState, applyMiddleware(thunk))

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    )
  }



  return store
}

export default configureStore