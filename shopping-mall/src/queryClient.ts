import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
// import { getTodos, postTodo } from "../my-api";

type AnyOBJ = { [key: string]: any };

// Create a client
export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if (!client)
            client = new QueryClient({
                // 캐쉬정책
                defaultOptions: {
                    queries: {
                        // staleTime : 마운트 되어 있는 시점에서 데이터가 구식인지 판단함.
                        // cacheTime : 언마운트된 후 어느 시점까지 메모리에 데이터를 저장하여 캐싱할 것인지를 결정함.
                        staleTime: 1000 * 60,
                        cacheTime: 1000 * 60 * 60 * 24,
                        refetchOnMount: false,
                        refetchOnReconnect: false,
                        refetchOnWindowFocus: false,
                    },
                },
            });
        return client;
    };
})();

const BASE_URL = "https://fakestoreapi.com";

export const fetcher = async ({
    method,
    path,
    body,
    params,
}: {
    method: "GET" | "POST" | "PUT" | "DELETe" | "PATCH";
    path: string;
    body?: AnyOBJ;
    params?: AnyOBJ;
}) => {
    try {
        let url = `${BASE_URL}${path}`;
        const fetchOptions: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": BASE_URL,
            },
        };

        if (params) {
            const searchParams = new URLSearchParams(params);
            url += "?" + searchParams.toString();
        }

        if (body) fetchOptions.body = JSON.stringify(body);

        const res = await fetch(url, fetchOptions);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
};

export const QueryKeys = {
    PRODUCTS: "PRODUCTS",
};
