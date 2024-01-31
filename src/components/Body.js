import FoodCard, {withOpenLabel} from "./foodCard"
// import foodList from "../../utils/mockData"
import { useEffect, useState, useContext } from "react"
import UserContext from "../../utils/UserContex";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfFoods from "../../utils/useListOfFoods";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {

 //Local State Variable - Super powerful Variable

//  let [ListOfFoods, setListOfFoods] = useState([]);
// let [FilteredListOfFoods, setFilteredListOfFoods] = useState([]);


const [searchText, setSearchText] = useState("");
const FoodCardOpen = withOpenLabel(FoodCard);

let [ListOfFoods, setListOfFoods] = useState([]);
let [FilteredListOfFoods, setFilteredListOfFoods] = useState([]);
//  const {ListOfFoods, FilteredListOfFoods} = useListOfFoods();


//  console.log(ListOfFoods)
//  console.log(FilteredListOfFoods)
// console.log("Body rendered");
 useEffect(() => {
    fetchData();
 },  [])
 
 const fetchData = async() => {
    const data= await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   

 const json = await data.json();
 console.log(json)
 //optional chaining
 setListOfFoods(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 setFilteredListOfFoods(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 };

//error: Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
 //added Allow cors extension, and eneabled it

 
//Online status

const onlineStatus = useOnlineStatus();

if(onlineStatus === false ) return  <h1>No internet</h1>

//live updating the userName
const { loggedInUser, setUserName } = useContext(UserContext);


//  console.log("Body rendered")
    return ListOfFoods.length===0 ? <Shimmer/>:(
        <div className="body pl-10">
        <div className="flex" >
            <div className="search p-4 m-4 ">
                <input type="text" 
                className="search-box border border-gray-400  rounded-sm px-3 py-1" placeholder="Search for food and restaurants " maxLength="100" size="50" width="20"
                 value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}/>
                <button className="px-4 py-1 mx-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                 onClick={() =>{
                    //filter the restrocards and update the UI
                    //searchText
                    console.log(searchText);
                    const filteredRestraurant =ListOfFoods.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredListOfFoods(filteredRestraurant)

                }}>Search🔍</button>
            </div>
            <div className="search p-4 m-4 flex items-center " >
            <button 
            className="bg-gray-300 px-4 py-1 shadow-2xl rounded-lg hover:bg-gray-400" 
            onClick={() => {
                const filteredList = ListOfFoods.filter(
                    (res) => res.info.avgRating >= 4.4
                );
                setFilteredListOfFoods(filteredList);
                }}
            >
            Top Rated restaurants
            </button>
            </div>

            <div className="p-4 m-4 flex items-center" >
                <label className="px-4 font-semibold text-lg">UserName :</label>
              <input className="border border-gray-500 p-1" 
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)} />
            </div>
            
            </div>
        <div className="food_Container flex flex-wrap ">
            {
                FilteredListOfFoods.map((restro) => (
                    <Link className="hover:scale-x-105"
                    key={restro.info.id} 
                    to= {"/restaurants/"+restro?.info?.id}>
                  {  restro.info.isOpen ? (
                      <FoodCardOpen   foodData={restro}/>
                       ) : ( 
                       <FoodCard   foodData={restro}/>
                      )}  
                    </Link>
                 
                
                ))
            }
               
        </div>
        </div>
    )
}
 //not using keys is not acceptable <<<index as key <<< unique key

 export default Body

 