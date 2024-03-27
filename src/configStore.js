import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { combineReducers } from 'redux'
import { logger } from 'redux-logger'
import moviesSlice from './store/moviesSlice'
import userSlice from './store/userSlice'

const rootReducer = combineReducers({
    movies: moviesSlice,
    user: userSlice

});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true
});

export const useAppDispatch = () => useDispatch();

export default store