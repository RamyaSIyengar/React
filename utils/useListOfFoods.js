import { useEffect, useState } from "react";

const useListOfFoods = () => {

    let [ListOfFoods, setListOfFoods] = useState([]);
    let [FilteredListOfFoods, setFilteredListOfFoods] = useState([]);


    useEffect(() => {
        fetchData();
    })

    const fetchData = async() => {
      const data= await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json =await data.json();

      setListOfFoods(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredListOfFoods(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      

    }





    return {ListOfFoods, FilteredListOfFoods} ;
}

export default useListOfFoods;