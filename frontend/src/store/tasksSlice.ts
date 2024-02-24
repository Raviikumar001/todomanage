import { createSlice } from '@reduxjs/toolkit';
import { TasksState , Task} from './store';

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  error: null,
  message:null,
  totalTasks:null
};

const tasksSlice = createSlice({
  
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasksStart(state) {
      state.isLoading = true;
      state.error = null;
      state.message = null;
    },
    fetchTasksSuccess(state, action: { payload: Task[] }) {

      state.tasks = action.payload.reverse(); 
      state.totalTasks = action.payload.length;
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
    createTaskSuccess(state, action:{payload: string}){
      state.isLoading = false;
      state.error = null;
      state.message = action.payload;

    },
    createTaskFailure(state,action: {payload:string}){
      state.error = action.payload;
      state.isLoading= false;
    }


 

  },
});

export const { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure , createTask, createTaskFailure, createTaskSuccess/* ... other actions */  } = tasksSlice.actions;
export default tasksSlice.reducer;  