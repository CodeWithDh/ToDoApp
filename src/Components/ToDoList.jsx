import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteTodo , markasDone } from "../Features/ToDos"

export default function ToDoList(){
    const todos=useSelector((state)=>state.todos)
console.log(todos)
    const dispatch=useDispatch();

    const handleDelete=(id)=>{
        console.log("deleting id : ",id)
        dispatch(deleteTodo(id))
    }

    const handleComplete=(id)=>{
        console.log("Marking as complete  to id : ",id)
        dispatch(markasDone(id))
        
    }


    return (
        <>
        <h3>ToDo List: </h3>
        <ol>
            {todos.length>0 && 
            todos.map((todo)=>{
                return <li 
                key={todo.id} >
                    
                    <p
                    style={todo.isDone?{textDecoration:"line-through"}:{}}
                    >
                        {todo.task}</p>

                    <button 
                    key={todo.id+"_delete"}
                    onClick={()=>{
                        handleDelete(todo.id)
                    }}
                    >Delete
                    </button>
                    <button 
                    onClick={()=>{
                        handleComplete(todo.id)
                    }}
                    key={todo.id+"_completed"}
                    >Completed
                    </button>
                </li>
            })
            }
        </ol>
        </>
    )
}