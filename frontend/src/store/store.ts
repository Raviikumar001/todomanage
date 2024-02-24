import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export interface Task {
  id: number; 
  title: string;
  description: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
