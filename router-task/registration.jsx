import { useNavigate } from "react-router-dom"
function Register(){
    const navigate=useNavigate()
    function submit(e){
        e.preventDefault()
        navigate("/login")
    }
    return(
        <div>
            <h1>Enter your details</h1>
            <form style={{textAlign:"center"}}>
                <input type="text" placeholder="name"/><br/>
                <input type="number" placeholder="phone number" /><br/>
                <input type="email" placeholder="e-mail"/><br/>
                <input type="password" placeholder="password"/><br/>
                <button onClick={submit}>submit</button>
            </form>
        </div>
    )
}
export default Register