import React from 'react';
import {useState} from 'react';
const AddTodos = props =>{

    const addTodo = props.addTodosFunc
    const [title, setTitle] = useState('')

    const addTodoFormStyle = {
        display: 'flex'
    }
    const addTodoInputStyle = {
        flex:'10',
        padding: '5px'
    }
    const changeTitle = event =>{
        setTitle(event.target.value)
    }
    const addSingleTodo = event =>{
        event.preventDefault()
        if (title !== ''){
            addTodo(title)
            setTitle('')
        }
    }
   
    return(
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input 
                style={addTodoInputStyle} 
                type='text' name='title' 
                placeholder='Thêm việc'
                value={title}
                onChange={changeTitle}/>
            <input 
                type='submit' 
                value='thêm' 
                className='btn'/>
        </form>
    )
}
export default AddTodos