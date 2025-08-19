import { Provider } from "react-redux"
import ToDoForm  from "./ToDoForm.jsx"
import ToDoList from "./ToDoList.jsx"

import {store} from "../App/Store.js"

export default function ToDoApp(){
    return (
        <>
        <h3>Todo App</h3>
        <Provider store={store} >
            <ToDoForm/>
            <ToDoList/>
        </Provider>
        </>
    )
}