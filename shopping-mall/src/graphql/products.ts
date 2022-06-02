import { gql } from "graphql-tag";

export type Product = {
    id: string;
    imageUrl: string;
    price: number;
    title: string;
    description: string;
    createdAt: string;
};

export type Products = {
    products: Product[];
};

// 상품 전체 리스트를 불러올 때 쓰는 쿼리
export const GET_PRODUCTS = gql`
    query GET_PRODUCTS {
        id
        imageUrl
        price
        title
        description
        createdAt
    }
`;

// 디테일 상품 불러올 때 쓰는 쿼리
export const GET_PRODUCT = gql`
    query GET_PRODUCT($id: string) {
        id
        imageUrl
        price
        title
        description
        createdAt
    }
`;

export default GET_PRODUCTS;
