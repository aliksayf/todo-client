import React from 'react';

const del = <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>;

function TodoItem(props) {

    const {editedId, setEditedId, item, delTodo} = props

    const update = (obj) => {
        props.updateTodo(obj)
        setEditedId({})
    }

    return (
        <>
            <li onDoubleClick={() => setEditedId(item)}>
                {item._id === editedId._id
                    ? <span>
                                <input value={editedId.name}
                                       onChange={(e) => setEditedId({...editedId, name: e.target.value})}/>
                                <span className='ml-n5'>
                                    <span onClick={() => update(editedId)}>&#10004;</span>
                                    <span className='text-danger' onClick={() => setEditedId({})}>&#10006;</span>
                                </span>
                            </span>
                    : item.name}
                <span className='ml-2' onClick={() => delTodo(item._id)}>{del}</span>
            </li>
        </>
    );
}

export default TodoItem;
