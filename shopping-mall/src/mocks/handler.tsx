import { graphql } from "msw";
import { QueryKeys } from "../queryClient";
import { v4 as uuid } from "uuid";
import GET_PRODUCTS, { GET_PRODUCT } from "../graphql/products";

const mockProducts = Array.from({ length: 20 }).map((_, i) => ({
    id: uuid(),
    imageUrl: `https://placeimg.com/200/150/${i + 1}`,
    price: 50000,
    title: `임시상품${i + 1}`,
    description: `임시상세내용${i + 1}`,
    createdAt: new Date(1653863545337 + i * 1000 * 60 * 60 * 10).toString(),
}));

const handler = [
    graphql.query(GET_PRODUCTS, (req, res, ctx) => {
        return res(
            ctx.data({
                products: mockProducts,
            }),
        );
    }),
    graphql.query(GET_PRODUCT, (req, res, ctx) => {
        return res(ctx.data(mockProducts[0]));
    }),
];

export default handler;
