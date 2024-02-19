import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface templateState {
  value: number
}

const initialState: templateState = {
  value: 0,
}

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    IncrementByAmount: (state, action: PayloadAction<number>) => {

      state.counter = state.counter + action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, IncrementByAmount } = templateSlice.actions