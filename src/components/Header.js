import { useState } from "react"
import { LOGO_URL } from "../../utils/constants"

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    console.log("Head rendered")
    return (
        <div className="header">
            <div className="logo_container">
                <img src={LOGO_URL}
                 width="150" height="120"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={ () => {
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header