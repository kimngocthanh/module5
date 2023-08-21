import { Component } from "react";
class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            valueInput: '',
            todoList: []
        }
    }
    addTodo() {
        this.setState({
            valueInput:document.getElementById("todoApp").value,
            todoList: [...this.state.todoList, document.getElementById("todoApp").value]
        })
    }

    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1>Todo List</h1>
                    <input defaultValue={this.state.valueInput} id="todoApp"></input>
                    <button onClick={() => this.addTodo()}>Add</button>
                    <ul>
                        {this.state.todoList.map((todo, index) => {
                            return <li key={index}>{todo}</li>
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

export default TodoApp;