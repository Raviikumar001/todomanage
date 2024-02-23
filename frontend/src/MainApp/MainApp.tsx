
import axios from 'axios';
import React,{useEffect,useRef} from 'react'


const MainApp:React.FC = () => {
  const isFirstRender = useRef(true);
  const fetchTasks =async()=> {

    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/v1/api/get-tasks`);
    console.log(response);
  }

  useEffect(()=> {

    if (isFirstRender.current) {
      isFirstRender.current = false; 
      fetchTasks();
      // Your effect code 
    }
  })

  return (
   <div className=' '>

  <div className='bg-[#B7C9F2]   border border-white  rounded-md'>
        <div className='p-6 flex justify-around items-center' >
          <img src='/clipboard.png' alt="task" height={50} width={50} />
          <p className=''>Total Tasks</p>
          <p></p>
        </div>

        
  </div>
        <p className='p-6'>Tasks</p>
   </div>
  )
}

export default MainApp




    

