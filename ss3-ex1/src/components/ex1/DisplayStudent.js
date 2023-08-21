import {Component} from "react";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            newStudent : {},
            studentList: [
                { id: '1', name: 'Thanh', age: '22', address: 'Hà Nội' },
                { id: '2', name: 'Phap', age: '23', address: 'Hà Nội' },
                { id: '3', name: 'Cuong', age: '24', address: 'Hà Nội' },
                { id: '4', name: 'Nhat', age: '25', address: 'Hà Nội' },
            ]
        }
    }
    addStudent() {
        let id = document.getElementById("id").value;
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let address = document.getElementById("address").value;
        const newStudent = {id:id,name:name,age:age,address:address}
        this.setState({
            studentList : [...this.state.studentList,newStudent]
        })
    }
    render() {
        return (
            <>
                <table border={1}>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {this.state.studentList.map((student, index) => {
                        return <tr key={index}>
                        <td >{student.id}</td>
                        <td >{student.name}</td>
                        <td >{student.age}</td>
                        <td >{student.address}</td>
                        </tr>
                    })}
                </table>
                <input value={this.state.newStudent.id} id="id"></input>
                <input value={this.state.newStudent.name} id="name"></input>
                <input value={this.state.newStudent.age} id="age"></input>
                <input value={this.state.newStudent.address} id="address"></input>
                <button onClick={() => this.addStudent()}>Add</button>
            </>
        )
    }
}

export default Student ;

