import React from 'react';
import {Todo} from './todo';

export const Todos = (props) => {
  return (
    <div className='container'>
        <h3>Todos List</h3>
        {props.todos.length == 0 ? 'No Todos found' : ''}
            {
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
            
    </div>
  )
}
