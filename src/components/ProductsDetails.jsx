import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
export const ProductsDetails=()=>{
const [data, setData]=useState([])
const params=useParams();
useEffect(()=>{
    const{id}=params;
    axios({
        url:`  http://localhost:8080/products/${id}`,
        method:"GET",
    
    }).then((res)=>{
        setData(res.data)
    })

},[params.id])
console.log(data)
    return(
 <div style={{gap:"2rem", marginTop:"10px"}}>
{
<div key={data?.id}>
<div ><img src={data?.url} style={{width:"50px", height:"50px"}} /></div>
<div>{data?.name}</div>
 <div> Rs{data?.price} </div>  
</div>}
<Link to="/products">Back</Link>
        </div>
    )

}