import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/IndexPortfolio";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio_index" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
