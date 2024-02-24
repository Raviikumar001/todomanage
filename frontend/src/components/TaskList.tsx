
import React from 'react'
import { Task } from '../store/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from "axios";
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskCompletion } from '../store/tasksSlice';
import { updatePayload } from '../store/tasksSlice';
type TaskProps ={
  tasks: Task[]
}

const TaskList:React.FC <TaskProps>= ({tasks}) => {

  const dispatch = useDispatch();

  async function delteTask(id:number){

   try {
    const respone = await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/v1/api/delete-task?id=${id}`);

    console.log(respone);
    if(respone){
      dispatch(deleteTask(id));
      toast.success(respone.data.message);
    }
   } catch (error:unknown) {
    const err = error as AxiosError<string>;
    if(err)
    {
      toast.success(err.response?.data);
    }
   }
  }
  

  async function onCompleteTask(id:number, status:boolean)
  {
      try {
        const respone = await axios.patch(`${import.meta.env.VITE_REACT_APP_API_URL}/v1/api/update-task?id=${id}`, {
          "completed":!status
        });

    console.log(respone);
    if(respone){
      const payload: updatePayload = {
        id: id,
        status: !status
    };
      dispatch(updateTaskCompletion(payload));
      toast.success(respone.data.message);
    }
      }  catch (error:unknown) {
        const err = error as AxiosError<string>;
        if(err)
        {
          toast.success(err.response?.data);
        }
       }
  }
  
  return (
    <div className='pl-6'>
      <ToastContainer />
        {tasks.map((task)=> (
          <>
          <div key={task.id} className='p-4 bg-[#333A73] border m-2 rounded-md flex justify-between mb-5 '>
            <div className='' >

            <p className='font-medium'>{task.title}</p>
            <p className='text-sm'>{task.description}</p>
            <div className='mt-3'>
              <button onClick={()=> onCompleteTask(task.id,task.completed)} className='border border-gray-500 p-1 rounded-lg bg-[#50C4ED]'>Completed</button>
              <button onClick={()=>delteTask(task.id)} className='p-1 ml-3 border-gray-500 rounded-lg bg-[#535C91]'>Delete</button>
            </div>

            </div>

            <div>
            <input checked={task.completed} id="orange-checkbox" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>

          
          </div>
          </>
        ))}
    </div>
  )
}

export default TaskList