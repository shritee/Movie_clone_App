import React ,{useState}from 'react'
import axios from 'axios'

export default function Register() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Add=()=>{
        // e.preventDefault()
        axios.post('https://movie-cloneapp.herokuapp.com/insert',{userName:userName, email:email, password:password})
    }
    return (
    <>
    <div className="container">
        <h1>Register</h1>
    <form onSubmit={Add}>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">UserName</label>
    <input type="text" 
    class="form-control" 
    id="username" 
    onChange={(e)=>{setUserName(e.target.value)}}
    name="userName"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" 
    class="form-control" 
    id="email" 
    onChange={(e)=>{setEmail(e.target.value)}}
    name="email"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" 
    class="form-control" 
    id="password" 
    onChange={(e)=>{setPassword(e.target.value)}}
    name="password"/>
  </div>
  <button type="submit" class="btn btn-primary" >Login</button>
</form>
    </div>
    </>
    )
}
