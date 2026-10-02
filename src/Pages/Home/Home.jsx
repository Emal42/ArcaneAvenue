import "./Home.css"
import { NavLink } from "react-router"
export default function Home() {

    return (
        <>

            <section className="banner">
                <div className="cta-wrapper">
                    <NavLink to="Products" className="cta"> Explore Aecane Avenue </NavLink>


                </div>
            </section>
        </>
    )

}