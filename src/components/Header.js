import { useEffect, useState } from "react"
import { LOGO_URL } from "../../utils/constants"
import { Link } from "react-router-dom"

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    // console.log("Head rendered")

    useEffect(() =>{
        console.log("useEffect called")
    }, [btnNameReact])
    return (
        <div className="header">
            <div className="logo_container">
                <img src={LOGO_URL}
                 width="150" height="120"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link> </li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={ () => {
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact(" ")
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header