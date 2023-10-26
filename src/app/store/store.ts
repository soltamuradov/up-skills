import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';

const reducers = combineReducers({
  products: productsReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
