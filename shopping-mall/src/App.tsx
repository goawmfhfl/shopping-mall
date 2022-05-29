import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { getClient } from "./queryClient";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Gnb from "./components/gnb";

const App = () => {
    const elem = useRoutes(routes);
    const queryClient = getClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Gnb />
            {elem}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
