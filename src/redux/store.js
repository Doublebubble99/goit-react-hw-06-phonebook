import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice/slice';
import { filtersSlice } from './filtersSlice/slice';
import { nameSlice } from './nameSlice/slice';
import { numberSlice } from './numberSlice/slice';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['name', 'number', 'filters'],
};
const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filters: filtersSlice.reducer,
  name: nameSlice.reducer,
  number: numberSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
