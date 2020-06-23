import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList(props) {

    const [editedId, setEditedId] = useState({'_id': '', name: 'name'})

    return (
        <table className="table">
            <thead>
            <TodoForm createTodo={props.createTodo}/>
            <tr>
                <th scope="col">Done</th>
                <th scope="col">Name <span><i><small> (double click to edit)</small></i></span></th>
                <th scope="col">Description <span><i><small> (double click to edit)</small></i></span></th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {props.list.length === 0
                ?<p className='badge-danger'>{props.message || 'There is no connection to server!'}</p>
                : props.list.map(el => <TodoItem key={el._id} item={el} updateTodo={props.updateTodo} delTodo={props.delTodo}
                                            editedId={editedId} setEditedId={setEditedId}/>
            )}
            </tbody>
        </table>
    );
}

export default TodoList;
