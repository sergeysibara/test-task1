import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from 'store/store';
import { IIdentifiable } from 'types/IIdentifiable';

export interface ITestTaskItem extends IIdentifiable {
  text: string
}

interface IState {
  list: ITestTaskItem[];
}

const initialState: IState = {
  list: [],
};

export const testTaskSlice = createSlice({
  name: 'testTask',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ITestTaskItem>) => {
      state.list.push(action.payload);
    },

    removeByIndex: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0) {
        state.list.splice(action.payload, 1);
      }
    },
  },
});

export const selectList = (state: RootState) => state.testTask.list;
export const selectListSize = (state: RootState) => state.testTask.list.length;

export const testTaskReducer = testTaskSlice.reducer;

export const storeActions = testTaskSlice.actions;
