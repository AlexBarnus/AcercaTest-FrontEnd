import { combineReducers } from 'redux'
//import vehicleReducer from './testReducer'

const reducers = {
  //  vehicleReducer
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer