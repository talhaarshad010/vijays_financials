import {configureStore} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import {persistReducer, persistStore} from 'redux-persist';
import AllReducer from './Reducers';
import {Auth} from './API/userAuth';

const storage = new MMKV();
const reduxPersistStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },

  getItem: key => {
    const Value = storage.getString(key);
    return Promise.resolve(Value);
  },

  deleteItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
const persistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, AllReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getdefaultMiddleware =>
    getdefaultMiddleware({
      serializableCheck: false,
    }).concat(Auth.middleware),
});
export const persistore = persistStore(store);
