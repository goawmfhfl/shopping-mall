import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";

const ProductItem = ({
    id,
    imageUrl,
    price,
    title,
    description,
    createdAt,
}: Product) => {
    return (
        <li className="products-item">
            <Link to={`/products/${id}`}>
                <p className="title">{title}</p>
                <img src={imageUrl} className="image" />
                <span className="price">{price}</span>
            </Link>
        </li>
    );
};

export default ProductItem;
