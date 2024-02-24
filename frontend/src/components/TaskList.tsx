
import React from 'react'
import { Task } from '../store/store';
type TaskProps ={
  tasks: Task[]
}

const TaskList:React.FC <TaskProps>= ({tasks}) => {
  console.log(tasks)
  return (
    <div className='pl-6'>
        {tasks.map((task)=> (
          <>
          <div key={task.id} className='p-2 bg-[#333A73] border m-2 rounded-md '>
            <div className='' >

            <p className='font-medium'>{task.title}</p>
            <p className='text-sm'>{task.description}</p>
            <div className='mt-3'>
              <button className='border border-gray-500 p-1 rounded-lg bg-[#50C4ED]'>Completed</button>
              <button className='p-1 ml-3 border-gray-500 rounded-lg bg-[#535C91]'>Delete</button>
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