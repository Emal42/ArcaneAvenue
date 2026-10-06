import "./Product.css"
import { NavLink } from "react-router"
export default function product({
    img,title,price,link
}){
        
    return(
        
        <NavLink className="product-card">
          
            <img src={img}  className="product-image"/>
            <h2 className="Product-title">{title}</h2>
            <p className="Prodct-price">{price}</p>
            <a href={link} className="product-link"></a>
        </NavLink>
        
        

    )
}