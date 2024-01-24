import { useEffect, useState } from "react"
import { LOGO_URL } from "../../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus"

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    // console.log("Head rendered")

    const onlineStatus = useOnlineStatus();

    useEffect(() =>{
        console.log("useEffect called")
    }, [])
    return (
        <div className="header">
            <div className="logo_container">
               <Link to="/"><img src={LOGO_URL}
                 width="150" height="120"/></Link> 
            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li>
                        Online Status: {onlineStatus? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link> </li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
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