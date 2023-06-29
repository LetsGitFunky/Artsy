import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Categories.css"


const Categories = () => {
    return (
        <>
            <div className="cat-container">
                <Link  to="/category/deals" className="cat-links">Deals</Link>
                <Link  to="/category/jewelry" className="cat-links">Jewelry & Accessories</Link>
                <Link  to="/category/clothing" className="cat-links">Clothing & Shoes</Link>
                <Link  to="/category/home" className="cat-links">Home & Living</Link>
                <Link  to="/category/wedding" className="cat-links">Wedding & Party</Link>
                <Link  to="/category/toys" className="cat-links">Toys & Entertainment</Link>
                <Link  to="/category/art" className="cat-links">Art & Collectibles</Link>
                <Link  to="/category/craft" className="cat-links">Craft & Supplies</Link>
                <Link  to="/category/gifts" className="cat-links">Gifts & Gift Cards</Link>
            </div>
        </>
    )
}

export default Categories
