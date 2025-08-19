import { useState } from "react"

import { useDispatch } from "react-redux"
import { addToDo } from "../Features/ToDos"
export default  function ToDoForm(){
    let[task,setTask]=useState("")
    let[errors,setErrors]=useState({
        task:"",
    })

    let dispatch=useDispatch()

    const handleChange=(event)=>{
        setTask(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(task.trim().toString()===""){
            console.log("error");
            
            setErrors({
                task:"Empty Task!"
            })
        }else{
            dispatch(addToDo(task));
            setErrors({
                task:""
            })
        }

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
        {errors.task.length>0?<p style={{color:"red"}}>{errors.task}</p>:null}
        <br />
        <button type="submit" onClick={handleSubmit}>Add Task</button>
        
        </form>
        </>
    )
}