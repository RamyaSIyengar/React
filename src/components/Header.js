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
        <div className="flex justify-between bg-gray-200 shadow-lg m-2 sm:bg-yellow-50 lg:bg-pink-50">
            <div className="logo_container bg-gray-200 ">
               <Link to="/"><img className="w-45" src={LOGO_URL}/></Link> 
            </div>
            <div className="flex items-center justify-between ">
                <ul className="flex  m-2 ">
                    <li className="px-4 font-semibold text-xl ">
                        Online Status: {onlineStatus? "✅" : "🔴"}
                    </li>
                    <li className="px-4 ">
                        <Link to="/" className="font-semibold text-xl hover:text-red-800 ">Home</Link></li>
                    <li className="px-4 ">
                        <Link to="/About" className="font-semibold text-xl hover:text-red-800">About Us</Link> </li>
                    <li className="px-4  font-semibold text-xl  hover:text-red-800"><Link to="/Contact">Contact Us</Link></li>
                    <li className="px-4 font-semibold text-xl hover:text-red-800"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4 font-semibold text-xl hover:text-red-800">Cart</li>
                    <button className="login text-black  hover:text-red-800"
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