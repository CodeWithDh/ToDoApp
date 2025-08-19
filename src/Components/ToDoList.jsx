import { useSelector } from "react-redux"


export default function ToDoList(){
    const todos=useSelector((state)=>state.todos)
    console.log(todos)
    return (
        <>
        <ul>
            {todos.map((todo)=>{
                <li key={todo.id} >{todo.task}</li>
            })}
        </ul>
        </>
    )
}