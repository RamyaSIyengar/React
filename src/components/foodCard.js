import { CDN_URL } from "../../utils/constants";

const FoodCard = (props) => {

    const {foodData} = props;
    const {name, costForTwo, avgRating, deliveryTime } = foodData.data;
    return (
        <div className="foodCard" style={{backgroundColor: "#f0f0f0"  }}>
            <img  className="foodlogo" src={ CDN_URL+ foodData.data.mediaAssetsimgId}
            />
            <h3>{name}</h3>
            <h4>₹{costForTwo/100} For Two</h4>
            <h4>{avgRating} Stars</h4>
            <h4>delivery in {deliveryTime}</h4>
            
        </div>
    );
}

export default FoodCard