import React,{useState,useEffect} from 'react'
import img2 from '../Assets/images/img5.jpg'
import '../style/style.css'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'


export default function Home() {

  const [data, setdata] = useState([])
 const [search,setSearch]=useState('')
 
 const get = ()=> {
 axios.get("http://localhost:3005/generic").then(res=>setdata(res.data)
 )
 }
 useEffect(() => {
 get()
 }, [])
    return (
        <>
        <div className="carousel">
        <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100 image"
      src={img2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src="https://tse2.mm.bing.net/th/id/OIP.PTsQfkkIVLNM63rFaWbi1AHaEK?w=322&h=181&c=7&o=5&dpr=1.25&pid=1.7"
      alt="Twilight"
    
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src="https://wallpapertag.com/wallpaper/full/1/a/8/425589-full-size-marvel-hd-wallpaper-1920x1080-for-hd.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </div>
  <br />
  <br/>
  <br/>
  <br/>
  <div style={{display: 'flex', justifyContent: 'center'  }} className="mt-5">
 <input className="form-control me-2 w-50" type="search" placeholder="Search Movies..." aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
 </div>
 
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
 </div>
 </div>
 
 )
})}
</>
)
}
