import React from "react";
import ReactDOM  from "react-dom/client";


/**
 * Header
 * -Logo
 * -Nav items
 * Body
 * -Search
 * -Restaurant container
 *  - Restaurant card - img, name of food
 * Footer
 * Copyright
 * links
 * address
 * contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo_container">
                <img src="data:image/png;base64,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"
                 width="150" height="120"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const FoodCard = (props) => {

    const {foodData} = props;
    const {name, costForTwo, avgRating, deliveryTime } = foodData;
    return (
        <div className="foodCard" style={{backgroundColor: "#f0f0f0"  }}>
            <img  className="foodlogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + foodData.mediaAssetsimgId}
            />
            <h3>{name}</h3>
            <h4>₹{costForTwo/100} For Two</h4>
            <h4>{avgRating} Stars</h4>
            <h4>delivery in {deliveryTime}</h4>
            
        </div>
    );
}


const foodList = [
        {
            type:"F",
            id:"09876",
            name:"Puliyogare",
            uuid: "yughkj6g-7c0j-9j7f-gfhg67a",
            city: "1",
            area: "KumarSwamy badavane, Tiptur",
            costForTwo:20000,
            mediaAssetsimgId:"kqvgpxkqzbmpypnuhk0r",
            deliveryTime: "1day",
            tags:[],
            slugs:{
                food: "Puliyogare-KumarSwamy-badavane",
                city: "tiptur",
                 },
            address: "MataPitru Nilaya, KumaraSwamy Badavane, Tiptur, 572201",
            locality: "Near Ram Party Hall",
            veg: true,
            favorite: false,
            promoted: true,
            avgRating: "4.5",
            new: true,

         },
        {
            type:"F",
            id:"09877",
            name:"BisibeleBath",
            costForTwo:25000,
            mediaAssetsimgId:"sgvvspbcx4n4zglmrow4",
            avgRating: "4.2",
            deliveryTime: "1day",

    },
    {
            type:"F",
            id:"09878",
            name:"Poha",
            costForTwo:15000,
            mediaAssetsimgId:"0ac90e95f57ca26e5a9ee87973366fdb",
            avgRating: "4.8",
            deliveryTime: "1day",
    },
    {
            type:"F",
            id:"09879",
            name:"Poori",
            costForTwo:15000,
            mediaAssetsimgId:"cdb96340062950ecec40e302578df552",
            avgRating: "4.4",
            deliveryTime: "1day",
    },
]



const Body = () => {
    return (
        <div className="body">
        <div className="search">Search</div>
        <div className="food_Container">
            {
                foodList.map((food) => (
                    <FoodCard key={food.id} foodData={food} /> 
                ))
            }
               
        </div>
        </div>
    )
}
 //not using keys is not acceptable <<<index as key <<< unique key
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)



//conflict driven UI
//Ui is driven by conflict- data
//carosel
