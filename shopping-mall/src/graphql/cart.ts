import { gql } from "graphql-request";

// cart로 담긴 녀석은
// []{}형태로 되어있다.
// 서버요청식으로 바꿀예정이당.

export type CartType = {
    id: string;
    imageUrl: string;
    price: number;
    title: string;
    amount: number;
};

export const ADD_CART = gql`
    mutation ADD_CART($id: string) {
        id
        imageUrl
        price
        title
        amount
    }
`;

export const GET_CART = gql`
    query GET_CART {
        id
        imageUrl
        price
        title
        amount
    }
`;
