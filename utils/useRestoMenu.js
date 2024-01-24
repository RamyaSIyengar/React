import { useState, useEffect } from "react";
import { MENU1_API } from "./constants";

const useRestroMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        // const Menu =  await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9307735&lng=77.5838302&restaurantId=");
        const Menu =  await fetch (MENU1_API+resId);
        const json = await Menu.json();
    console.log(json.data)
        
         

        setResInfo(json.data)
    };

    return resInfo;
};

export default useRestroMenu;