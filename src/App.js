import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/IndexPortfolio";
import Contact from "./pages/Contact";
import { useState } from "react";
function App() {
  const [appear, setAppear] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio_index" element={<Index />} />
          <Route
            path="/contact"
            element={<Contact appear={appear} setAppear={setAppear} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
