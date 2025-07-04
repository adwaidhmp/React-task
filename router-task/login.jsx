import { useNavigate } from "react-router-dom"
function Login() {
    const navigate=useNavigate()
    function login(e){
        e.preventDefault()
        navigate("/home")
    }
  return (
    <div>
        <h1>Registered Successfully</h1>
        <h1>Enter Login details</h1>
        <form >
            <input type="email" placeholder='emial'/>
            <input type="password"  placeholder='password'/>
            <button onClick={login}>Login</button>
        </form>
    </div>
  )
}

export default Login