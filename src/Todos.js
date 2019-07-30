import React from 'react';
import  './index2.css';
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Todos=({todos,deleteTodo})=>
{
    const todolist=todos.length?(
    todos.map(todo=>
        {
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span><span onClick={()=>{deleteTodo(todo.id)}} className="special" ><FontAwesomeIcon icon={faMinusSquare} /></span>
                </div>

            )
        })
    ):
    (
    <p>you have no todo 's left </p>
    )
    return(
    <div className="todos collection">
        <span>{todolist}</span>
    </div>
    )
}
export default Todos;