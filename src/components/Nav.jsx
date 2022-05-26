import { Link } from "react-router-dom"
export const Nav=()=>{

    return(

        <div style={{display:"flex", justifyContent:"center", gap:"2rem"}}>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/products">products</Link>
        </div>
    )

}