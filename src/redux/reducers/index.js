import {combineReducers} from 'redux';
import { counterSliceReducer } from './counterSlice';
import { userSliceReducer } from './userSlice';
export const rootReducer = combineReducers({
    counter:counterSliceReducer,
    users:userSliceReducer
})