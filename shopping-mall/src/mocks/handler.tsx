import { graphql } from "msw";
import { QueryKeys } from "../queryClient";
import { v4 as uuid } from "uuid";
import GET_PRODUCTS from "../graphql/products";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
    id: uuid(),
    imageUrl: `https://placeimg.com/200/150/${i + 1}`,
    price: 50000,
    title: `임시상품${i + 1}`,
    createdAt: new Date(1653863545337 + i * 1000 * 60 * 60 * 10).toString(),
}));

const handler = [
    graphql.query(GET_PRODUCTS, (req, res, ctx) => {
        return res(
            ctx.data({
                products: mock_products,
            }),
        );
    }),
];

export default handler;
