import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../../utils/cartSlice"

const Cart = ( )=> {

  const cartItems= useSelector((store) => store.cart.items)

  const dispatch = useDispatch();

  const handleClearCart= (() => {
     dispatch(clearCart());
  
  })

  return(
    <div className=" p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto ">
      <button className="text-white bg-black rounded-lg p-2 m-2 hover:scale-105 "
      onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length ===0 && <h1 className="text-xl font-semibold ">Cart is empty, Please add items to the Cart!</h1>}
      
        <ItemList items = {cartItems}/>
      </div>
    </div>
  )
}

export default Cart