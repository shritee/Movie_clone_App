import React ,{useState,useContext}from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import loginContext from '../context/loginContext'
import '../style/style.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    let history=useHistory()
    const context=useContext(loginContext)

    const handleChange=(e)=>{
        context.changeLogin(true)
        e.preventDefault()
        const data={
            email:email, password:password
        }
        axios.post('http://localhost:3005/login',data)
        .then((res)=>{
            if(res.data === "Login successfully"){
                alert("Login successfully")

                history.push('/Admin')
            }
            else{
                alert("Login Failed")
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
    <>
    <div className="container">
        <h1>Login</h1>
    <div className="login ">
    <form onSubmit={handleChange}>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" 
    class="form-control w-75" 
    id="email" 
    onChange={(e)=>{setEmail(e.target.value)}}
    name="email"/>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" 
    class="form-control w-75" 
    id="password" 
    onChange={(e)=>{setPassword(e.target.value)}}
    name="password"/>
  </div>
  <button type="submit" class="btn btn-primary" >Login</button>
</form>
    </div>
    </div>
    </>
    )
}
