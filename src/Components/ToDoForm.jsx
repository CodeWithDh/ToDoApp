import { useState } from "formik"


export default  function ToDoForm(){
    let[task,setTask]=useState("")
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

        <button type="submit">Add Task</button>
        
        </form>
        </>
    )
}