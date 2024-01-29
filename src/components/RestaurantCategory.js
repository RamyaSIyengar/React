import ItemList from "./ItemList"

const RestaurantCategory = ({data}) =>{
    // console.log(data)

    return (
    <div className=" ">
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 p-4  bg-gray-100 border-gray-300  border-b-8 shadow-lg ">
            <div className="flex justify-between"> 
            <span className="text-lg font-bold">
                {data.title} ({data.itemCards.length})</span>
             <span className="">🔽</span></div>
        
        
        {/* Accordian Body */}
         
           <ItemList items={data.itemCards}/>
         
            
            </div>
    </div>
    )
}

export default RestaurantCategory