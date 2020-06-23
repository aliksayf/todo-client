import React, {useState} from 'react';

function TodoForm(props) {

    const initialState = {name: '', description: ''}

  const [newTodo, setNewTodo] = useState(initialState)

    const createNewItem = (e) => {
        e.preventDefault();
        if(newTodo.name !== '' && newTodo.description !== '')
        props.createTodo(newTodo)
        setNewTodo(initialState)
    }

  return (
    <div className='form-group form-row ml-lg-5 pl-lg-3'>
      <input
          type="text"
          className='form-control col-3 mr-3'
          placeholder='Name'
          value={newTodo.name}
          onChange={(e) => setNewTodo({...newTodo, name: e.target.value})}
      />
      <input
          type="text"
          className='form-control col-5 mr-3'
          placeholder='Description'
          value={newTodo.description}
          onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
      />
      <button
          type='submit'
          className='btn btn-primary mr-3'
          onClick={createNewItem}
          disabled={(newTodo.name === '' || newTodo.description === '')}
      >
          Create
      </button>
    </div>
  );
}

export default TodoForm;
