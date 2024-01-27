import  CDN_URL  from "../../utils/constants";

const FoodCard = (props) => {
    
    const {foodData} = props;
    // console.log(foodData)
    const {name, cuisines, avgRating, deliveryTime,costForTwo,aggregatedDiscountInfoV3
    } = foodData?.info;
    return (
        <div className="foodCard m-4 p-4  h-[550px] w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 text-overflow: clip  transition-all " >
          
            <div>

            <img  className="foodlogo rounded-lg h-[300px] w-[250px] " src={ CDN_URL+ foodData.info.cloudinaryImageId}
            />
            
            <h3 className="font-bold py-4 text-xl ">{name}</h3>
            <h5 className="font-serif py-2 ">{cuisines.join(", ")}</h5>
            <h5 className="font-medium py-2">{costForTwo} </h5>
            <h5>{avgRating}⭐</h5>
            </div>
         
            
           
            
           
            
            
            
        </div>
    );
}

//Higher order component

//input- restrocard => outpuut restrocardpromoted

export const withOpenLabel = (FoodCard) =>{
    return (props) =>{
      return (
        <div  >
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">Open</label>
          <FoodCard {...props}/>
        </div>
      )
    }
}

export default FoodCard