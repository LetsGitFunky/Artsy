import { TiShoppingCart } from 'react-icons/ti'
import "./cart.css"

const CartButton = () => {


    return (
        <div >
        <button className='cart-button'><TiShoppingCart size={21}/></button>
        </div>
    )
}

export default CartButton
