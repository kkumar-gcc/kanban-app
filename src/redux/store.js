import {configureStore} from '@reduxjs/toolkit';
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

import kanbanReducer from "./slice/kanbanSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = persistReducer(persistConfig, kanbanReducer);

const store = configureStore({
    reducer: { kanban: rootReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export let persistor = persistStore(store);
export default store;