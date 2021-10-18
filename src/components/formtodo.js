import React, { useState } from "react";

const FormTodo=({addodo})=>{
  const [val,SetTodos]= useState('')

const HandleSubmit=(e)=>{
e.preventDefault();
addodo(val)
SetTodos('')
}
return(
    <form onSubmit={HandleSubmit}>
        <input type='text' value={val} onChange={(e)=>SetTodos(e.target.value)}/>
        <button type ='submit'>Click me</button>
    </form>
)

}

export default FormTodo;