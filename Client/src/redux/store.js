import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from '../redux/loadersSlice';
import userReducer from '../redux/usersSlice';

const store = configureStore({
    reducer:{
        loaders:loaderReducer,
        users:userReducer,
    }
})


export default store;