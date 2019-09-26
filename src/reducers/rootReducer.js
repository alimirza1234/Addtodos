import projectReducer from "./projectReducer"
import authReducer from './authReducer'
import { combineReducers} from 'redux'

const  rootReducers = combineReducers ({   //inside this obj which reducers you combine
    project : projectReducer,
    auth : authReducer
})

export default rootReducers
