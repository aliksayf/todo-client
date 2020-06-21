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

    useEffect(()=>{
        getTodo();
    }, [])

  return (
    <div>
      <TodoForm/>
      <TodoList list={todoList}/>
    </div>
  );
}

export default App;
