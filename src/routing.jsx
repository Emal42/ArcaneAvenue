import { Routes,Route } from "react-router";
import Home from "./Pages/Home/Home";
import Wishlist from "./Pages/Wishlist/Wishlist";

import Auth from "./Pages/Auth/Auth"

export default function Pages(){

    return(
            <Routes>

                <Route index element= {<Home/>}/>
                <Route path="auth" element= {<Auth/>}/>
                <Route path="wishlist" element= {<Wishlist/>}/>
            </Routes>
    )

}

