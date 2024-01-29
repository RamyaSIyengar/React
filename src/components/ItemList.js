import CDN_URL from "../../utils/constants";

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
           {items.map((item) =>(
            <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-400 border-b-4 text-left flex justify-between"
            >
            <div className="w-9/12">
                <div className="py-2">
                     <span>{item.card.info.name}</span>
                     <span>₹{item.card.info.price/100}</span>
                </div>
                <p className="text-slate-400"> {item.card.info.description}</p>
            </div>
            <div className="w-3/12 h-auto p-1 h-18 ">
                <img src={CDN_URL+item.card.info.imageId}/>
             </div>



            </div>

           ))};
        </div>
    )};
export default ItemList