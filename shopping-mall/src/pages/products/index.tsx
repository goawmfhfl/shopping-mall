import { useQuery } from "react-query";
import ProductItem from "../../components/product/ProductItem";
import GET_PRODUCTS from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { Products } from "../../graphql/products";

const ProductList = () => {
    const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () =>
        graphqlFetcher(GET_PRODUCTS),
    );
    // Query를 통해서 key값과 전달할 Query값을 콜백으로 전달한다.
    return (
        <div>
            <h2>상품목록</h2>
            <ul className="products">
                {data?.products?.map((product) => (
                    <ProductItem {...product} key={product.id} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
