import React from 'react'
import { Link } from "react-router-dom";
const CreateTaskButton:React.FC = () => {
  return (
    <div className='p-4 border border-white  rounded-full text-center bg-[#6b4fbb] sticky-bottom' title='New Task'>
        {/* <p className='font-semibold'><Link to="/app/create-task">Create a new task  </Link></p> */}

        <Link to="/app/create-task"> <img src="feather-pen.png" alt="new note" height={40} width={40}  />  </Link>
       
    </div>
  )
}

export default CreateTaskButton