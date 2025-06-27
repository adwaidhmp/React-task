import React, { useState } from "react";

function Usecard(props){
    let [ag,set]=useState(props.age)
    function increaseage(){
        set(ag +=1)
    }
    function decreaseage(){
        set(ag-=1)
    }
    function reset(){
        set(ag=props.age)
    }
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Age :{ag}</p>
            <button onClick={increaseage}>increase age</button>
            <button onClick={reset}>Reset to default</button>
            <button onClick={decreaseage}>decrease age</button>
            
        </div>
    )
    }

    export default Usecard