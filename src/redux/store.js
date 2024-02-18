import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carsSlice";
import { modalReducer } from "./modalSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "favoriteCars",
  whitelist: ["favoriteCarIds"],

  storage,
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carReducer),
    modal: modalReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
