import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./store";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
            <header>
              <Link to="/">Weather 23</Link>
            </header>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
            </QueryClientProvider>
          </Provider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);