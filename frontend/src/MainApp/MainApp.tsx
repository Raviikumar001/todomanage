import axios, { AxiosError } from "axios";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from "react";
import { RootState } from "../store/store";
import { fetchTasksStart, fetchTasksSuccess } from "../store/tasksSlice";
import CreateTaskButton from "../components/createTaskButton";
import TaskPlaceholder from "../components/TaskPlaceholder";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const MainApp: React.FC = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const {tasks, totalTasks} = useSelector((state: RootState) => state.tasks); 
  const fetchTasks = async () => {
    dispatch(fetchTasksStart());
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/v1/api/get-tasks`);
     
      if(response)
      {   
          dispatch(fetchTasksSuccess(response.data))
      }
    } catch (error:unknown) {
      const err = error as AxiosError<string>;
   
      if(err.response)
      {
        toast.error(err.response.data)

      }
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      fetchTasks();
     
    }
  });

  return (
    <div className=" md:grid  md:grid-cols-1 md:mr-[20%] md:ml-[20%] md:justify-center">
      <div className="bg-[#265073] m-5   border border-white  rounded-md md:w-[100%] ">
        <div className="p-6 md:p-4 flex justify-around items-center">
          <Link to="/">
          <img src="/clipboard.png" alt="task" height={50} width={50} />
          
          </Link>
          <div>
            <p className="">Total Tasks</p>
            <p>{totalTasks}</p>
          </div>
        </div>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <p className="p-6">Tasks</p>
      <CreateTaskButton />
      {
        !(tasks.length>0 )? <TaskPlaceholder />:
        <TaskList tasks={tasks} />
      }
      
    </div>
  );
};

export default MainApp;
