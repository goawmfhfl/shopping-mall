import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
}: Product) => {
    return (
        <li className="products-item">
            <Link to={`/products/${id}`}>
                <p className="cateroty">{category}</p>
                <p className="title">{title}</p>
                <img src={image} className="image" />
                <span className="price">{price}</span>
                <span className="rating">{rating.rate}</span>
            </Link>
        </li>
    );
};

export default ProductItem;
