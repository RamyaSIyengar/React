import ItemList from "./ItemList"
import { useState } from "react"

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
    // console.log(data)


//    const [showItems, setShowItems] = useState(false)
    const handleClick = () => {

        setShowIndex();
        
        // !setShowItems(!showItems) toggle before controlled component applied
    }

    return (
    <div className=" ">
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 p-4  bg-gray-100 border-gray-300  border-b-8 shadow-lg ">
            <div className="flex justify-between " onClick={handleClick}> 
            <span className="text-lg font-bold cursor-pointer">
                {data.title} ({data.itemCards.length})</span>
             <span className="">🔽</span></div>
        
        
        {/* Accordian Body */}
         
          {showItems && <ItemList items={data.itemCards}/>}
         
            
            </div>
    </div>
    )
}

export default RestaurantCategory