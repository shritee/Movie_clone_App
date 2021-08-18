import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../App.css'



export default function List() {

 const [data, setdata] = useState([])
 const [search,setSearch]=useState('')
 
 const get = ()=> {
 axios.get("http://localhost:3005/generic").then(res=>setdata(res.data)
 )
 }
 useEffect(() => {
 get()
 }, [])

 
 const handleDelete=(id)=>{
     axios.delete(`http://localhost:3005/delete/${id}`)
 }


 return (
 <>
 <br />
 <br />
 <div style={{display: 'flex', justifyContent: 'center'  }} className="mt-5">
 <input className="form-control me-2 w-50" type="search" placeholder="Search Movies..." aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
 </div>
 <br />

 {data.filter((val=>{
   if (search==="")
   {
     return val
   }
   else if(val.movieName.toLowerCase().includes(search.toLowerCase()))
   {
     return val
   }
  })).map((val,key)=>{
 return(
 <div className="card col-4 m-5" style={{width:'300px', float: 'left' }} key={key}>
 <img src={val.image} className="card-img-top" style={{height:'300px'}} alt="..."/>
 <div className="card-body">
 <h5 className="card-title">{val.movieName}</h5>
 <p className="card-text">Published year:{val.date}</p>
 <p className="card-text">Genre:{val.generic}</p>
 <button className="btn btn-primary ms-5" onClick={()=>{handleDelete(val._id)}}>Delete</button>
 </div>
 </div>
 
 )
})}
 </>
 )
}

