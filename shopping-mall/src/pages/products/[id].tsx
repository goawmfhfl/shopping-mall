import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { Products } from "../../graphql/products";
import ProductDetail from "../../components/product/ProductDetail";
import { GET_PRODUCT } from "../../graphql/products";

const ProductDetailPage = () => {
    const { id } = useParams();
    const { data } = useQuery<Products>([QueryKeys.PRODUCTS, id], () =>
        graphqlFetcher(GET_PRODUCT, { id }),
    );

    if (!data) return null;

    return (
        <div>
            <h2>상품상세</h2>
            <ProductDetail item={data} />;
        </div>
    );
};

export default ProductDetailPage;
