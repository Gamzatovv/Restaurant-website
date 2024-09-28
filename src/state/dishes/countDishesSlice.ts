import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DishState {
    id: number;
    count: number;
}

const initialState: DishState[] = [
]

const countDishesSlice = createSlice({
    name: 'countDishes',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>)=>{
            const dish = state.find((dish)=>dish.id === action.payload)
            if (dish) {
                dish.count++
            } else {
                state.push({id: action.payload, count: 1,})
            }
        },
        decrement: (state, action: PayloadAction<number>)=>{
            const dish = state.find((dish)=>dish.id === action.payload)
            if (dish && dish.count > 1) {
                dish.count-=1
            } else {
                state.splice(action.payload, 1)
            }
        }
    }

});

export const { increment, decrement } = countDishesSlice.actions;
export default countDishesSlice.reducer
