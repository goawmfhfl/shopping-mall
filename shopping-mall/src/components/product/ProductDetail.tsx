import { Product } from "../../types";

const ProductDetail = ({
    item: {
        category,
        title,
        image,
        price,
        description,
        rating: { rate },
    },
}: {
    item: Product;
}) => {
    return (
        <div className="products-detail">
            <p className="cateroty">{category}</p>
            <p className="title">{title}</p>
            <img src={image} className="image" />
            <span className="description">{description}</span>
            <span className="price">{price}</span>
            <span className="rating">{rate}</span>
        </div>
    );
};

export default ProductDetail;
