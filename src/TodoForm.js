import React, {useState} from 'react';

function TodoForm(props) {

  const [newTodo, setNewTodo] = useState({name: '', description: ''})

    const createNewItem = (e) => {
        e.preventDefault();
        props.createTodo(newTodo)
    }

  return (
    <div>
      <input type="text" placeholder='Name' value={newTodo.name} onChange={(e) => setNewTodo({...newTodo, name: e.target.value})}/>
      <input type="text" placeholder='Description' value={newTodo.description} onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}/>
      <button type='submit' onClick={createNewItem}>Create</button>
    </div>
  );
}

export default TodoForm;
