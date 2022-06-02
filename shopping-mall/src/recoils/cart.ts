import { atom, selectorFamily } from "recoil";

const cartState = atom<Map<string, number>>({
    key: "cartState",
    default: new Map(),
});
// 상품 ID별로 수량을 체크해야하기 때문에 map메서드를 사용했다.

// console.log(cartState)
// RecoilState {key: 'cartState'}
// key: "cartState"

export const cartItemSelector = selectorFamily<number | undefined, string>({
    key: "cartItem",
    get:
        (id: string) =>
        ({ get }) => {
            const carts = get(cartState);
            console.log(carts);
            // map 0 ~ 20
            // Map(0) {size: 0}
            console.log(id);
            // 0 ~ 20
            // 아이템리스트 1~20
            return carts.get(id);
        },
    // get 요청으로 map에 있는 특정 id값을 가진 요소를 찾아낸다
    set:
        (id: string) =>
        ({ get, set }, newValue) => {
            console.log(id);

            if (typeof newValue === "number") {
                const newCart = get(cartState).set(id, newValue);
                set(cartState, newCart);
            }
        },
});
