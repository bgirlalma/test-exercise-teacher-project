import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReduser } from './user-autorization/userSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { teacherReducer } from './teacher/teacherSlice';
import { favoriteReducer } from './teacher/favoriteSlice';
import { filterReducer } from './teacher/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['getTeachers'],
};

const rootReduser = combineReducers({
  userAuth: authReduser,
  teachers: teacherReducer,
  favorites: favoriteReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
