import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { testTaskReducer } from 'features/test-task/slice';

export const store = configureStore({
  reducer: {
    testTask: testTaskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
