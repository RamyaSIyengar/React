import FoodCard from "./foodCard"
// import foodList from "../../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const Body = () => {

    //Local State Variable - Super powerful Variable

 const [ListOfFoods, setListOfFoods] = useState([]);
console.log(ListOfFoods)
 useEffect(() => {
    fetchData();
 },  [])

 const fetchData = async() => {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

 const json = await data.json();
 console.log(json)
 //optional chaining
 setListOfFoods(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
 };

//error: Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
 //added Allow cors extension, and eneabled it

 

//  console.log("Body rendered")
    return ListOfFoods.length===0 ? <Shimmer/>:(
        <div className="body">
        <div className="filter">
            <button 
            className="FavouriteDishes" 
            onClick={() => {
                const filteredList = ListOfFoods.filter(
                    (res) => res.data.avgRating > 4
                );
                setListOfFoods(filteredList);
                }}
            >
            Favourite Dishes
            </button>
            </div>
        <div className="food_Container">
            {
                ListOfFoods.map((food, index) => (
                    <FoodCard key={food.info.id} foodData={food} /> 
                ))
            }
               
        </div>
        </div>
    )
}
 //not using keys is not acceptable <<<index as key <<< unique key

 export default Body

 