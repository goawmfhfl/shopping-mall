import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ADD_CART } from "../../graphql/cart";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClient";
import { cartItemSelector } from "../../recoils/cart";

const ProductItem = ({
    id,
    imageUrl,
    price,
    title,
    description,
    createdAt,
}: Product) => {
    // const { mutate: addCart } = useMutation((id: string) =>
    //     graphqlFetcher(ADD_CART, { id }),
    // );

    const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
    const addToCart = () => setCartAmount(cartAmount || 0 + 1);

    return (
        <li className="products-item">
            <Link to={`/products/${id}`}>
                <p className="title">{title}</p>
                <img src={imageUrl} className="image" />
                <span className="price">{price}</span>
            </Link>
            <button className="add-cart" onClick={addToCart}>
                장바구니 담기
            </button>
            <span>{cartAmount || 0}</span>
        </li>
    );
};

export default ProductItem;
