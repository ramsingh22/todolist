import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <div>
        <h3>Todo Details</h3>
        <p>{todo.name}</p>
        <button className='button btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
