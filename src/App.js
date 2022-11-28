import './App.css';
import Header from './Components/header';
import {Footer} from './Components/footer';
import {Todos} from './Components/todos';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './Components/AddTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { NotFound } from './Components/NotFound';

function App() {
    let initTodo;
    if(localStorage.getItem("todos") === null){
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const addTodo = (name, desc) => {
        console.log("I'm going to add todo", name);
        let sno = (todos.length != 0) ? todos[todos.length - 1].sno + 1 : 1;
        const myTodo = {
            sno : sno,
            name : name,
            desc : desc
        }

        console.log("updated todo list", myTodo);
        setTodos([...todos, myTodo]);

    }

    const onDelete = (todo) => {
        console.log('herer test delete function', todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))

        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const [todos, setTodos] = useState (initTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

  return (
    <>
    <Router>
        <Header title="Custom Todos" searchBar={true} />
        <Routes>
            <Route exact path="/" element={<Home addTodo={addTodo} todos={todos} onDelete={onDelete} />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        

        <Footer />
    </Router>
    </>
  );
}

export default App;
