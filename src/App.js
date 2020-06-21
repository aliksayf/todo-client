import React, {useEffect, useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";

const getAll = 'http://localhost:5000/todo'

function App() {
    const [todoList, setTodoList] = useState([])

    const getTodo = () => {
        axios({
            method: 'get',
            url: getAll,
        })
            .then(function (response) {
                setTodoList(response.data)
            });
    }

    const updateTodo = (obj) => {
        axios({
            method: 'patch',
            url: `${getAll}/${obj._id}`,
            data: {
                name: obj.name,
                description: obj.description
            }
        }).then(()=> getTodo())

    }

    const delTodo = (id) => {
        axios({
            method: 'delete',
            url: `${getAll}/${id}`,
        }).then(()=> getTodo())

    }

    const createTodo = (obj) => {
        axios({
            method: 'post',
            url: `${getAll}`,
            data: {
                name: obj.name,
                description: obj.description
            }
        }).then(()=> getTodo())

    }

    useEffect(()=>{
        getTodo();
    }, [])

  return (
    <div>
      <TodoForm createTodo={createTodo}/>
      <TodoList list={todoList} updateTodo={updateTodo} delTodo={delTodo}/>
    </div>
  );
}

export default App;
