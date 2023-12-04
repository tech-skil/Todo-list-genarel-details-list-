import "./App.css";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { AddTodo } from "./Components/AddTodo";
import { Footer } from "./Components/Footer";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("delete", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (
    Fname,
    Sname,
    mail,
    phno,
    address1,
    address2,
    city,
    state,
    zpin
  ) => {
    console.log(
      "Adding general details to the list",
      Fname,
      Sname,
      mail,
      phno,
      address1,
      address2,
      city,
      state,
      zpin
    );
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      Fname: Fname,
      Sname: Sname,
      mail: mail,
      phno: phno,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zpin: zpin,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </>
  )
}

export default App;
