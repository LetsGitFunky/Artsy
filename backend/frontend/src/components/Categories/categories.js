import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Categories.css"


const Categories = () => {
    return (
        <>
            <div className="cat-container">
                <Link  to="/deals" className="cat-links">Deals</Link>
                <Link  to="/jewelry" className="cat-links">Jewelry & Accessories</Link>
                <Link  to="/clothing" className="cat-links">Clothing & Shoes</Link>
                <Link  to="/home-living" className="cat-links">Home & Living</Link>
                <Link  to="/wedding" className="cat-links">Wedding & Party</Link>
                <Link  to="/toys" className="cat-links">Toys & Entertainment</Link>
                <Link  to="/art" className="cat-links">Art & Collectibles</Link>
                <Link  to="/craft" className="cat-links">Craft & Supplies</Link>
                <Link  to="/gifts" className="cat-links">Gifts & Gift Cards</Link>
            </div>
        </>
    )
}

export default Categories
