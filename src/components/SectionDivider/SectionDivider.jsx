import "./SectionDivider.css"
import { NavLink } from "react-router"
import Star from "../../assets/Star.png"
export default function SectionDivider({ text, link }) {

    function drawLine(){

        return(

            <div className="div-line"/>
        )
    }
    function drawwithLink(){
        return(
            <>
            <div className="div-line"/>
            <NavLink className="div-link" to={link}>View all</NavLink>
            <div className="div-line short"/>
            </>
        )
    }

    return (
        <div className="section-divider">
            <div className="divider-col ">
                <div className="div-line" />
            </div>
            <div className="divider-col-middle ">
                <img src={Star} />
                <h2>{text}</h2>
                <img src={Star} />
            </div>
            <div className="divider-col ">
                { link ? drawwithLink() : drawLine() }
            </div>
        </div>
    )
}