import { configureStore } from "@reduxjs/toolkit";
import countDishesReducer from "./dishes/countDishesSlice";


const store = configureStore({
    reducer: {
        dish: countDishesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store