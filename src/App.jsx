import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./store";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import About from "./About";
import Header from './Header';


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
      <Header />
      <BrowserRouter>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
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
