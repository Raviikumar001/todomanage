import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksState , Task} from './store';

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  error: null,
  message:null,
  totalTasks:null
};

export type updatePayload = {
  id: number,
  status:boolean
}


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
    setMessage(state, action: {payload:string}){
      state.message = action.payload
    },

    createTask(state){
      state.isLoading = true;
      state.error = null;
      state.message = null;
    },
    createTaskSuccess(state, action:{payload: string}){
      state.isLoading = false;
      state.error = null;
      state.message = action.payload;

    },
    createTaskFailure(state,action: {payload:string}){
      state.error = action.payload;
      state.isLoading= false;
    },

    deleteTask(state, action: {payload:number}) { 
      const existingIndex = state.tasks.findIndex(task => task.id === action.payload);

      if (existingIndex !== -1) {
          state.tasks.splice(existingIndex, 1); 
          if(state.totalTasks)
          state.totalTasks = state.totalTasks - 1;

     
      }  
  },

  updateTaskCompletion(state, action: PayloadAction<updatePayload>) {
    const taskToUpdate = state.tasks.find(task => task.id === action.payload.id);

    if (taskToUpdate) {
        taskToUpdate.completed = action.payload.status; 
    } 
}
 

  },
});

export const { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure ,
  setMessage,
  createTask, createTaskFailure, createTaskSuccess,updateTaskCompletion,
  
  deleteTask
  } = tasksSlice.actions;
export default tasksSlice.reducer;  