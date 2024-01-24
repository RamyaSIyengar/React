import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU1_API} from "../../utils/constants";
import useRestroMenu from "../../utils/useRestoMenu";


const RestroMenu = () =>{

    // const [resInfo, setResInfo] = useState(null);
     
    //to fetch the id
    const {resId} = useParams();
    console.log(resId)

    const resInfo = useRestroMenu(resId);
    
   // moved this to useRestroMenu to fetchdata so tht here u can just display content -customhook
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     // const Menu =  await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9307735&lng=77.5838302&restaurantId=");
    //     const Menu =  await fetch (MENU1_API+resId);
    //     const json = await Menu.json();
    // console.log(json.data)
        
         

    //     setResInfo(json.data)
    // };


    if (resInfo === null) return  <Shimmer/>;

//    console.log(resInfo);
   const {name, cuisines, costForTwoMessage, areaName, sla } = resInfo?.cards[0]?.card?.card?.info;
    
   const {itemCards} = 
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   console.log(itemCards)
    
    return(
        <div className="menu">
             <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}, {sla.lastMileTravelString}</p>
            <h3>{sla.slaString}, {costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item) =>
                 <li key={item.card.info.id}> {item.card.info.name} - Rs. {item.card.info.defaultPrice/100}</li>)

                }
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
            </ul> 
        </div>
    )
}

export default RestroMenu;