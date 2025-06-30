import { useRef, useState } from "react"
import './App.css';
function Todo(){
    let [data,setdata]=useState([])
    function set(){
        let a = refernce.current.value
        refernce.current.focus()
        if (a==="")return
        setdata([...data,a])
        refernce.current.value=""
    }
    let refernce=useRef()
    function clear(){
        setdata([])
    }
    function dlt(index){
        let b = data.toSpliced(index, 1);
    setdata(b);
    }
    let c = data.length
return(
    <div className="todo" >
        <div><input ref={refernce} placeholder="Enter task" className="inp"></input><button onClick={set} className="btn" onFocus={set}>
            +</button></div>
        <ul>{
            data.map((i,index)=>{return <li key={index} className="list" >
             {i}
            <button className="btn2" onClick={()=>dlt(index)} >-</button></li> }) 
            }
        </ul>
        <div className="foot">
        Tasks Remaining are {c} <button onClick={clear} className="btn3" onFocus={set}>Clear all</button>
        </div>
    </div>
)
}

export default Todo