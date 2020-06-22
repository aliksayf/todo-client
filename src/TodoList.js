import React, {useState} from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {

    const [editedId, setEditedId] = useState({'_id': '', name: 'name'})

    return (
        <table className="table table-sm">
            <thead>
            <tr>
                <th scope="col" >Done</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
                {props.list.map(el => <TodoItem key={el._id} item={el} updateTodo={props.updateTodo} delTodo={props.delTodo} editedId={editedId} setEditedId={setEditedId}/>
                )}
            </tbody>
        </table>
    );
}

export default TodoList;
