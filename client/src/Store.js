import {configureStore} from '@reduxjs/toolkit'
import  useReducer  from './features/User'
export const store= configureStore({
    reducer : {
        user : useReducer
    }
})