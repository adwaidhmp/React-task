import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    function logout(){
        navigate("/")
    }
  return (
    <div>
        <h1>Logged In Succesfully</h1>
        <h3>Home page</h3>
        <h2>HAII</h2>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home