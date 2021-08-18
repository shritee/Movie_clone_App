import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function Admin() {
    const [movieName, setmovieName] = useState('')
    const [generic, setGeneric] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    let history=useHistory()

    const addMovies=() => {
        axios.post('http://localhost:3005/admin',{movieName:movieName,generic:generic,date:date,image:image})
        history.push('/List')

    }
    return (
        <>
       
        <div style={{marginTop:70}} className="container">
        <h1>Admin Dashboard</h1>
           <div>
           <form onSubmit={addMovies}>
           <div className="mb-3">
                <label for="movieName" className="form-label">Movie Name</label>
                <input type="text" className="form-control w-100" id="movieName" onChange={(e)=>{setmovieName(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label for="generic" className="form-label">Generic</label>
                <input type="text" className="form-control w-100" id="generic" onChange={(e)=>{setGeneric(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label for="date" className="form-label">Date</label>
                <input type="year" className="form-control w-100" id="date" onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label for="image" className="form-label">Image</label>
                <input type="text" className="form-control w-100" id="image" onChange={(e)=>{setImage(e.target.value)}}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
           </form>
            </div> 
        </div>
            
        </>
    )
}

