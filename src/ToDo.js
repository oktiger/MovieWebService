import { useState } from "react";

function ToDo() {
    const [toDo, setToDo] = useState(" ")
    const [toDos, setToDos] = useState([])
    const onChange = (event) => { setToDo(event.target.value)}
    const onSubmit = (event) => {
        event.preventDefault() //기본적인 form의 기능을 제한시킴.
        if (toDo == "") {
            return
        }
        setToDo("")
        setToDos(currentArray => [toDo, ...currentArray])
    }
   
    return (
    <div>
        <h1>My ToDoList {toDos.length}</h1>
        <form onSubmit={onSubmit}>
            <input 
            onChange={onChange} 
            value={toDo} 
            type="text" 
            placeholder="Write your to do..."
            />
        <button>Add To Do</button>
        </form>
        <hr></hr>
        {toDos.map((item, index) => (
        <li key={index}>{item}</li>))}
    </div>
    )
}

export default ToDo;