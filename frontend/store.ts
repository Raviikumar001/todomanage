import { configureStore } from '@reduxjs/toolkit';

type Task = {
    id: number,
    title:string,
    description: string,
    completed:boolean
}

type RootState = {
    task: Task;
}


// const store =configureStore({
//     reducer: {
//         task:
//     }
// })