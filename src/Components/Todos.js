import React from 'react'
import './todot.css'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    let myStyle = {
        minHeight:"100vh",
        margin:"10px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Genarel Detail List</h3>
            {props.todos.length===0? "No Todos to display":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>  </>
                )
            })
            } 
        </div>
    )
}
