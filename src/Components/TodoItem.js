import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.sno+1}{". "}{todo.Fname}{" "}{todo.Sname}</h4>
            <p>{todo.mail}</p>
            <p>{todo.phno}</p>
            <p>{todo.address1}</p>
            <p>{todo.address2}</p>
            <p>{todo.city}</p>
            <p>{todo.state}</p>
            <p>{todo.zpin}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
