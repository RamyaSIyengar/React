import FoodCard from "./foodCard"
// import foodList from "../../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

 //Local State Variable - Super powerful Variable

 let [ListOfFoods, setListOfFoods] = useState([]);
 let [FilteredListOfFoods, setFilteredListOfFoods] = useState([]);

 const [searchText, setSearchText] = useState("");

 console.log(ListOfFoods)
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

 

//  console.log("Body rendered")
    return ListOfFoods.length===0 ? <Shimmer/>:(
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" 
                className="search-box"
                 value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}/>
                <button onClick={() =>{
                    //filter the restrocards and update the UI
                    //searchText
                    console.log(searchText);
                    const filteredRestraurant =ListOfFoods.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    

                    setFilteredListOfFoods(filteredRestraurant);

                }}>Search</button>
            </div>
            <button 
            className="FavouriteDishes" 
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
        <div className="food_Container">
            {
                FilteredListOfFoods.map((restro) => (
                    <Link
                    key={restro.info.id} 
                    to= {"/restaurants/"+restro?.info?.id}>
                        <FoodCard  foodData={restro}/>
                       
                    </Link>
                 
                
                ))
            }
               
        </div>
        </div>
    )
}
 //not using keys is not acceptable <<<index as key <<< unique key

 export default Body

 