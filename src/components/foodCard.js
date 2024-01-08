import  CDN_URL  from "../../utils/constants";

const FoodCard = (props) => {
    
    const {foodData} = props;
    // console.log(foodData)
    const {name, cuisines, avgRating, deliveryTime,costForTwo } = foodData?.info;
    return (
        <div className="foodCard" style={{backgroundColor: "#f0f0f0"  }}>
            <img  className="foodlogo" src={ CDN_URL+ foodData.info.cloudinaryImageId}
            />

            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo} </h5>
            <h5>{avgRating} Stars</h5>
            

            
        </div>
    );
}

export default FoodCard