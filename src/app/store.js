<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
=======
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer  from "../features/user/userSlice";
import movieReducer from '../features/movie/movieSlice';

export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false
    })
})
>>>>>>> master
