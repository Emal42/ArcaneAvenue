import { Routes,Route } from "react-router";
import Home from "./Pages/Home/Home";
import Wishlist from "./Pages/Wishlist/Wishlist";


export default function Pages(){

    return(
            <Routes>

                <Route index element= {<Home/>}/>
                <Route path="Wishlist" element= {<Wishlist/>}/>
            </Routes>
    )

}

