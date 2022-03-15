import React from 'react';


const todoItem = props =>{
    const todo = props.todoProps
    const markComplete = props.markCompletedFunc
    const deleteTodo = props.deleteTodoFunc
    //style
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #cccccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }

    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#ffffff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    

    //return
    return (
        <p style={todoItemStyle}>
            <input 
                type="checkbox" 
                onChange={markComplete.bind(this, todo.id)}  
                checked={todo.completed}/>
            {todo.title}
            <button 
                style={deleteButtonStyle}
                onClick={deleteTodo.bind(this, todo.id)}
                >Delete</button>
        </p>)
}



export default todoItem