import React, {useState} from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {

    const [editedId, setEditedId] = useState({'_id': '', name: 'name'})

    return (
        <div>
            <ul>
                {props.list.map(el => <TodoItem key={el._id} item={el} updateTodo={props.updateTodo} delTodo={props.delTodo} editedId={editedId} setEditedId={setEditedId}/>
                )}
            </ul>
        </div>
    );
}

export default TodoList;
