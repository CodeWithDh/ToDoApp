import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[]
}

export const todoSlice=createSlice({
    name:"ToDos",
    initialState,

    reducers:{
        addToDo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false,
            }
            state.todos.push(newTodo)
        },
        deleteTodo:(state,action)=>{
            // action.paylod  got id to delete
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        markasDone:(state,action)=>{
            // got id in action.payload to assign isDone as  true
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true
                }
            })
        }
    }
})

export const{addToDo,deleteTodo,markasDone}=todoSlice.actions;
export default todoSlice.reducer;