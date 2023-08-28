import { useState, useEffect } from "react";
import * as TodoService from "../service/TodoService";
function ToDoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getAllTodoList();
    }, [])

    const getAllTodoList = async () => {
        const result = await TodoService.getAll();
        setTodos((prev) => prev = result);
    }

    const addTodo = async () => {
        const title = document.getElementById("title").value;
        await TodoService.addTodo({ title: title });
        getAllTodoList();
        alert("oke nhé!")
    }

    return (
        <>
            <div>
                <thead>
                    <h1>Todo List</h1>
                    <input type="text"  id="title" />
                    <button type="button" onClick={() => addTodo()}>submit</button>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => (
                            <li key={todo}>{todo.title}</li>
                        ))
                    }
                </tbody>
            </div>
        </>
    )
}
export default ToDoList;