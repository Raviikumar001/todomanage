
import React,{useEffect,useState, useRef} from 'react'
import  ArrowLeft from './svgFiles';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from "axios";
const CreateTask:React.FC = () => {
   const [title, SetTitle] = useState('');
   const [description, setDescription] = useState('')

    const FormSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        try {
            
        } catch (error) {
            
        }
    }
  return (
        <>
            <div className='bg-white h-screen text-black w-[100%]'>
                <div className='flex justify-between p-2 pt-5'>
                  <Link to="/app"><ArrowLeft />  </Link>  
                    <h2> Create a New Task</h2>
                    <p></p>
                </div>

                <div className='pl-2 pr-4 mt-[20%] md:mt-0 w-full'>
                    <form onSubmit={(e)=> FormSubmit(e)}
                    className=''
                    >
                        <h2      className='pb-3'>Task Name</h2>
                            
                        <input 
                        value={title}
                        onChange={(e)=> SetTitle(e.target.value)}

                        type="text" placeholder='Task Title..' className='bg-white w-full rounded-md p-3 border border-gray-500 placeholder:' />
                
                        <h2 className='mt-6'>Description</h2>
                
                        {/* <input type="text" placeholder='Enter Task description' className='bg-white rounded-md  w-full p-4 border border-gray-500 placeholder: dynamic-input' />  */}
                        <textarea 
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                        id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your task description..."></textarea>

                
                        <button className='mt-[40%] text-center w-full border border-gray-400 p-4
                        bg-[#0052cc]
                        text-white
                        font-bold
                        rounded-lg
                        '>Create task</button>

                    </form>

                </div>

            </div>
        </>
  )
}

export default CreateTask