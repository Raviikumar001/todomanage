import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from "react";
import { RootState } from "../store/store";
import { fetchTasksStart, fetchTasksSuccess } from "../store/tasksSlice";
import CreateTaskButton from "../components/createTaskButton";
import TaskPlaceholder from "../components/TaskPlaceholder";
import TaskList from "../components/TaskList";


const MainApp: React.FC = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const {tasks, isLoading} = useSelector((state: RootState) => state.tasks); 
  const fetchTasks = async () => {
    dispatch(fetchTasksStart());
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/v1/api/get-tasks`);
      console.log(response);
      if(response)
      {   console.log(response.data )
          dispatch(fetchTasksSuccess(response.data))
      }
    } catch (error) {
      
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      fetchTasks();
      // Your effect code
    }
  });

  return (
    <div className=" ">
      <div className="bg-[#B5C0D0] m-5  border border-white  rounded-md">
        <div className="p-6 flex justify-around items-center">
          <img src="/clipboard.png" alt="task" height={50} width={50} />
          <div>
            <p className="">Total Tasks</p>
            <p>9</p>
          </div>
        </div>
      </div>
      <p className="p-6">Tasks</p>
      <CreateTaskButton />
      {
        isLoading ? <TaskPlaceholder />:
        <TaskList tasks={tasks} />
      }
      
    </div>
  );
};

export default MainApp;
