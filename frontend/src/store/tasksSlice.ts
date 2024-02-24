import { createSlice } from '@reduxjs/toolkit';
import { TasksState , Task} from './store';


const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasksStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchTasksSuccess(state, action: { payload: Task[] }) {
      state.tasks = action.payload; 
      state.isLoading = false;
    },
    fetchTasksFailure(state, action: { payload: string }) {
      state.error = action.payload;
      state.isLoading = false; 
    }, 

    createTask(state){
      state.isLoading = true;
      state.error = null;
    },
    createTaskSuccess(state){
      state.isLoading = true;
      state.error = null;
    },
    createTaskFailure(state,action: {payload:string}){
      state.error = action.payload;
      state.isLoading= false;
    }

 

  },
});

export const { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure /* ... other actions */  } = tasksSlice.actions;
export default tasksSlice.reducer;  