
import React, {useState} from 'react';
import TodoItem from './TodoItem';
import {Fragment} from 'react';
import AddTodos from './AddTodos';
import { v4 as uuidv4 } from 'uuid';
const Todos = () =>{

    const [todosState, setTodosState] = useState([
        {
            id: uuidv4(),
            title: 'việc 1',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'việc 2',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'việc 3',
            completed: false
        }
    ])

    const markCompleted = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })

        setTodosState(newTodos)
    }

    const deleteTodo = id => {
        const newTodos = todosState.filter(todo => todo.id !== id)
        setTodosState(newTodos)
    }

    const addTodo = title =>{
        const newTodos = [...todosState,{
            id: uuidv4(),
            title,
            completed: false
        }] //const newTodos = [,{viec1}, {viec2}, {viec3},{id: 4, title, completed:false}]
        setTodosState(newTodos)
    }

   /*  const allTodos = []

    for( let todo of todoState){
        allTodos.push(<p>{todo}</p>)
    } sữ dụng map như ở dưới*/
    
    return(
        <Fragment>
            <AddTodos addTodosFunc = {addTodo}/>
            {todosState.map(todo => {
                return <TodoItem 
                    key={todo.id} 
                    todoProps = {todo} 
                    markCompletedFunc = {markCompleted}
                    deleteTodoFunc= {deleteTodo}
                />
            })}
        </Fragment>
    )
}
export default Todos