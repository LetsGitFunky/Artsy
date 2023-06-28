import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti'
import "./CartButton.css"

const CartButton = () => {
    return (
        <div>
            <Link to="/cart" className='cart-button'>
                <TiShoppingCart size={21} />
            </Link>
        </div>
    )
}

export default CartButton;
