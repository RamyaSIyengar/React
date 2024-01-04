import FoodCard from "./foodCard"
import foodList from "../../utils/mockData"
import { useState } from "react"
const Body = () => {

    //Local State Variable - Super powerful Variable

    const [ListOfFoods, setListOfFoods] = useState(foodList);

    return (
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
                ListOfFoods.map((food) => (
                    <FoodCard key={food.data.id} foodData={food} /> 
                ))
            }
               
        </div>
        </div>
    )
}
 //not using keys is not acceptable <<<index as key <<< unique key

 export default Body