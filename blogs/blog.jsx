import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BlogContext } from "../App";

function Blog() {
    let refer=useRef()
    let refer1=useRef()
    const[title,settitle]= useState("")
    const[blog,setblog]= useState("")
    const { blogs, setblogs } = useContext(BlogContext);


    const navigate = useNavigate()
    
    const blg = () => {
    
    if(title.length===0&&blog.length===0){
        window.alert("Type something")
        return
    }
    
    const newblog = {
      title:title,
      blog:blog
    };
    setblogs([...blogs, newblog]);
    window.alert("Qoute Added")
   refer.current.value=""
   refer1.current.value=""
  };
  function nv(){
    navigate("/posts");
  }

  console.log(blogs)

    return (
        <div className="box">
            <div>
                <input placeholder="title" onChange={(e)=>settitle(e.target.value)} ref={refer} ></input>
            </div>
            <div className="text">
                <textarea placeholder="Qoute" onChange={(e)=>setblog(e.target.value)} ref={refer1}></textarea>
            </div>
            <button onClick={blg}>SUBMIT</button>
            <button onClick={nv} >ALL POST</button>
        </div>
    )
}
export default Blog