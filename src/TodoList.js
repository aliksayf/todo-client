import React, {useState} from 'react';

function TodoList(props) {

    const [editedId, setEditedId] = useState({})

    const update = (obj) => {
        props.updateTodo(obj)
        setEditedId({})
    }

    return (
        <div>
            <ul>
                {props.list.map(el =>
                    (<li key={el._id} onDoubleClick={() => setEditedId(el)} >
                        {el._id === editedId._id
                            ? <span>
                                <input value={editedId.name} onChange={(e) => setEditedId({...editedId, name: e.target.value})}/>
                                <span className='ml-n5'>
                                    <span onClick={() => update(editedId)}>&#10004;</span>
                                    <span className='text-danger' onClick={() => setEditedId({})}>&#10006;</span>
                                </span>
                            </span>
                            : el.name}
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default TodoList;
