import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'reducers/auth';
import filmReducer from 'reducers/Film';
import actorReducer from 'reducers/actor';
import categoryReducer from 'reducers/category';
import userReducer from 'reducers/user';
import bannerReducer from 'reducers/banner';
const store = configureStore({
  reducer: {
    auth: authReducer,
    films: filmReducer,
    actor: actorReducer,
    category: categoryReducer,
    user: userReducer,
    banner: bannerReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStore = typeof store;
export default store;
