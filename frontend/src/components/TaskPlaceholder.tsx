import React from 'react'

const TaskPlaceholder:React.FC = () => {
  return (
    <div>
        <div className='flex p-6 gap-5'>
            <img src='tasks.png' alt='tasks' height={50} width={50} />
            <p>Looks like You don't have any tasks
                <br />
                Go Ahead and Create One!
            </p>
        </div>

    </div>
  )
}

export default TaskPlaceholder