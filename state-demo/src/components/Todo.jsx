import { useState } from "react";

export const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Buy groceries", completed: false }
    ]);
    const [todo, setTodo] = useState({id:0, text:'', completed:false});
    function addTask(e) {
        setTodos([...todos, todo]);
        setTodo({});
    }
    function updateTask() {
        setTodos(todos.map((x) => {
            return (x.id === todo.id) ? todo : x
        }));
        setTodo({});

    }
    function deleteTask(){
        setTodos(todos.filter((x)=>{
            return (x.id!==todo.id);
        }))
    }
    return <div>
        Enter id: <br />
        <input type="number" onChange={(e) => setTodo({ ...todo, id: Number(e.target.value) })} /><br /><br />
        Enter task:<br />
        <input type="text" onChange={(x) => setTodo({ ...todo, text: x.target.value })} /><br /><br />
        <input type="checkbox" onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
        <button type="submit" onClick={addTask}>Submit</button>
        <button type="submit" onClick={updateTask}>Update</button>
        <button type="submit" onClick={deleteTask}>Delete</button>
        {
            todos.map((x) => {
                return <div>
                    {JSON.stringify(x)}</div>
            })
        }

    </div>
}