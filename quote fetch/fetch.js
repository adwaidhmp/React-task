import { useEffect, useState } from "react";

function Fetch(){
    let[data,setdata]=useState([])
    useEffect(()=>{
    async function getdata() {
        let response = await fetch("https://dummyjson.com/quotes")
        let quote = await response.json()
        console.log(quote)
        setdata(quote.quotes.slice(0,10))
    }
    getdata()
    },[])
    return(
        <div style={{width:"1000px",color:"yellow"}}>
            <h1>*-Quotes-*</h1>
            <ul>
        {data.map((item) => (
          <li key={item.id}><h1>{item.quote}</h1></li> ))
          }
            </ul>
        </div>
    )
        
    
}
export default Fetch