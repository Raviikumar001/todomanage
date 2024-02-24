import React from 'react'
import { Link } from "react-router-dom";
const CreateTaskButton:React.FC = () => {
  return (
    <div className='p-6 border border-white m-2 rounded-lg text-center bg-[#6b4fbb] sticky-bottom'>
        <p className='font-semibold'><Link to="/app/create-task">Create a new task  </Link></p>
    </div>
  )
}

export default CreateTaskButton