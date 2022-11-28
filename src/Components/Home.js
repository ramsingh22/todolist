import React from 'react';
import {Todos} from './todos';
import { AddTodo } from './AddTodo';

export const Home = ({onDelete, addTodo, todos}) => {
  return (
    <div>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
    </div>
  )
}
