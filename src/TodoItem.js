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

    const doneTodo = () => {
        const obj = {...item, done: !item.done}
        props.updateTodo(obj)
        console.log('item', item)
        console.log('obj', obj)
    }

    return (
        <>
            <tr className="row1 " onClick={() => item._id !== editedId._id && setEditedId({})}>

                <th>
                    <input type='checkbox' checked={item.done} onChange={doneTodo}/>
                </th>
                <td>
                    {item._id === editedId._id
                        ? <div className="input-group">
                            <input className="form-control" value={editedId.name}
                                   onChange={(e) => setEditedId({...editedId, name: e.target.value})}/>
                            <div className="input-group-append mr-n3">
                                <button className='btn btn-outline-success'
                                        onClick={() => update(editedId)}>&#10003;</button>
                                <button className='btn btn-outline-secondary'
                                        onClick={() => setEditedId({})}>&#10005;</button>
                            </div>
                        </div>
                        : <span className={item.done ? 'text-decoration-line-through mr-5' : ' mr-5'}
                                onDoubleClick={() => setEditedId(item)}>
                        {item.name}
                    </span>}
                </td>
                <td>
                    {item._id === editedId._id
                        ? <div className="input-group ">
                            <input className="form-control" value={editedId.description}
                                   onChange={(e) => setEditedId({...editedId, description: e.target.value})}/>
                            <div className="input-group-append mr-n3">
                                <button className='btn btn-outline-success'
                                        onClick={() => update(editedId)}>&#10003;</button>
                                <button className='btn btn-outline-secondary'
                                        onClick={() => setEditedId({})}>&#10005;</button>
                            </div>
                        </div>
                        : <span className={item.done ? 'text-decoration-line-through mr-5' : ' mr-5'}
                                onDoubleClick={() => setEditedId(item)}>
                        {item.description}
                    </span>}
                </td>
                <td>
                    <button className='btn btn-outline-danger' onClick={() => delTodo(item._id)}>{del}</button>
                </td>
            </tr>
        </>
    );
}

export default TodoItem;
