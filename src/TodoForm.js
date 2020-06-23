import React, {useState} from 'react';

function TodoForm(props) {

    const initialState = {name: '', description: ''}

    const [newTodo, setNewTodo] = useState(initialState)

    const createNewItem = (e) => {
        e.preventDefault();
        if (newTodo.name !== '' && newTodo.description !== '')
            props.createTodo(newTodo)
        setNewTodo(initialState)
    }

    return (
        <>
            <tr className='table-active'>
                <th>

                </th>
                <td>
                    <input
                        type="text"
                        className='form-control '
                        placeholder='Name'
                        value={newTodo.name}
                        onChange={(e) => setNewTodo({...newTodo, name: e.target.value})}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        className='form-control '
                        placeholder='Description'
                        value={newTodo.description}
                        onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
                    />
                </td>
                <td>
                    <button
                        type='submit'
                        className='btn btn-primary '
                        onClick={createNewItem}
                        disabled={(newTodo.name === '' || newTodo.description === '')}
                    >
                        Create
                    </button>
                </td>
            </tr>
        </>
    );
}

export default TodoForm;
