import { Product } from "../../graphql/products";
const ProductDetail = ({
    item: { id, createdAt, title, imageUrl, price, description },
}: {
    item: Product;
}) => {
    return (
        <div className="products-detail">
            <p className="title">{title}</p>
            <img src={imageUrl} className="image" />
            <span className="description">{description}</span>
            <span className="price">{price}</span>
        </div>
    );
};

export default ProductDetail;
