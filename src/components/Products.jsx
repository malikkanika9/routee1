import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Products=()=>{
const [data, setData]=useState([])
const[page, setPage]=useState(1)

useEffect(()=>{
    axios({
        url:"  http://localhost:8080/products",
        method:"GET",
        params:{
            _page:page,
            _limit:5
        }
    }).then((res)=>{
        setData(res.data)
    })

},[page])
console.log(data)
    return(
 <div style={{gap:"2rem", marginTop:"10px"}}>
{data?.map((item)=>(
<div key={item.id}>
<div ><img src={item.url} style={{width:"50px", height:"50px"}} alt="img" /></div>
<div>{item.name}</div>
 <div>Rs.{item.price} </div>  
 <Link to={`/products/${item.id}`}> See more Details</Link>
</div>))}
        </div>
    )

}