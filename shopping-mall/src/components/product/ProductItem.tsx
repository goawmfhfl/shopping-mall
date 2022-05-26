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
        <li>
            <p>{category}</p>
            <p>{description}</p>
            <img src={image} />
            <span>{price}</span>
            <span>{title}</span>
            <span>{rating.rate}</span>
            <span>{rating.count}</span>
        </li>
    );
};

export default ProductItem;
