import { useEffect, useState } from "react"
import { LOGO_URL } from "../../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus"
import UserContext from "../../utils/UserContex"
import { useContext } from "react"
import { useSelector } from "react-redux"

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    // console.log("Head rendered")

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

    //Selector- subscribing to the redux store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    // useEffect(() =>{
    //     console.log("useEffect called")
    // }, [])
    return (
        <div className="flex justify-between shadow-lg bg-gray-200 ">
            {/* //bg-gray-200 shadow-lg m-2 sm:bg-yellow-50 lg:bg-pink-50 */}
            <div className="logo_container bg-gray-200 shadow-sm ">
               <Link to="/"><img className="w-45 rounded-full" src={LOGO_URL}/></Link> 
            </div>
            <div className="flex items-center justify-between ">
                <ul className="flex  m-2 ">
                    <li className="px-4 font-semibold text-xl ">
                        Online Status: {onlineStatus? "✅" : "🔴"}
                    </li>
                    <li className="px-4 ">
                        <Link to="/" className="font-semibold text-xl hover:text-gray-500 ">Home</Link></li>
                    <li className="px-6 ">
                        <Link to="/About" className="font-semibold text-xl hover:text-gray-500">About Us</Link> </li>
                    <li className="px-6  font-semibold text-xl  hover:text-gray-500"><Link to="/Contact">Contact Us</Link></li>
                    <li className="px-6 font-semibold text-xl hover:text-gray-500"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-6 ">
                    <Link to="/cart" className="font-semibold text-xl hover:text-gray-500">Cart🛒({cartItems.length}) </Link></li>
                    <button className=" bg-gray-300 font-semibold text-xl px-6  rounded-lg hover:bg-gray-400 "
                    onClick={ () => {
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")
                    }}
                    >{btnNameReact}</button>
                    <li className="px-6 font-semibold text-xl"> {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header