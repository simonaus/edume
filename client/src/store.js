import { configureStore } from '@reduxjs/toolkit'
import predictiveTextReducer from './predictiveTextSlice';

export default configureStore({
  reducer: {
    predictiveText: predictiveTextReducer
  }
})