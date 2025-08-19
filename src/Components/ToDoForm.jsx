import { useState } from "react"

import { useDispatch } from "react-redux"
import { addToDo , deleteTodo , markasDone } from "../Features/ToDos"
export default  function ToDoForm(){
    let[task,setTask]=useState("")

    let dispatch=useDispatch()

    const handleChange=(event)=>{
        setTask(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(addToDo(task))
        setTask("")
    }

    return (
        <>
        <form action="/submit">
        
        <label htmlFor="task">Enter Task</label>

        <input 
        type="text" 
        value={task}
        onChange={handleChange}
        id="task" 
        placeholder="Enter Task.." 
        />

        <br />

        <button type="submit" onClick={handleSubmit}>Add Task</button>
        
        </form>
        </>
    )
}