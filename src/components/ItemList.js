import CDN_URL from "../../utils/constants";

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div className="flex-wrap">
           {items.map((item) =>(
            <div
            key={item.card.info.id}
            className="p-4 m-4 border-gray-400 border-b-3 text-left flex flex-wrap justify-between"
            >
            <div className="w-9/12">
                <div className="py-2 font-medium from-neutral-700">
                     <span>{item.card.info.name}</span>
                     <span>  ₹{item.card.info.price/100 || item.card.info.defaultPrice/100 }</span>
                </div>
                <p className="text-slate-400"> {item.card.info.description}</p>
            </div>
            <div className="w-3/12  p-4   relative ">
                
                <button className="px-4 py-1 bg-black text-white shadow-lg absolute bottom-5 left-14 rounded-sm hover:scale-105 transition-all">Add+</button>
                <img src={CDN_URL+item.card.info.imageId} className="w-full rounded-md cursor-pointer"/>
             </div>



            </div>

           ))};
        </div>
    )};
export default ItemList