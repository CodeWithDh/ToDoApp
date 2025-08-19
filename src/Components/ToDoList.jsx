import { useSelector } from "react-redux"


export default function ToDoList(){
    const todos=useSelector((state)=>state.todos)
    console.log(todos)
    return (
        <>
        <h3>ToDo List: </h3>
        <ol>
            {todos.length>0 && 
            todos.map((todo)=>{
                return <li key={todo.id} >
                    <p>{todo.task}</p>
                    <button key={todo.id}>Delete</button>
                    <button key={todo.id}>Completed</button>
                </li>
            })
            }
        </ol>
        </>
    )
}