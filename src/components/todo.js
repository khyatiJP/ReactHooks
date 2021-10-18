import React, { useEffect, useState }  from "react";
import FormTodo from "./formtodo";
const Todo=()=>{
 const[Todo,setTodo]  = useState([
        {text:"rty",id:1},
        {text:"uiyu",id:2}
    ])
    const Addodo=(text)=>{
        setTodo([
            ...Todo, {text,id:Math.random()}
        ])
    }
    const [counter,AddCounter]=useState(0)
    useEffect(()=>{
        console.log(Todo)
    },[Todo])
return(
    <div>
        <ul>
           {Todo.map((list)=>{
               return(<li>{list.text}</li>)
           })}
        </ul>
        <FormTodo addodo={Addodo}/>
        <button onClick={()=>AddCounter(counter+1)}>{counter}</button>
    </div>
)

}
export default Todo;