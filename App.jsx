import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
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
  const preferredLocation = useState(null);
  return (
    <div>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <header>
              <Link to="/">Weather 23</Link>
            </header>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
