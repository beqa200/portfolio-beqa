import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/IndexPortfolio";
import Contact from "./pages/Contact";
import PortfolioDetail from "pages/PortfolioDetail";
import { useState } from "react";
import { projects } from "./data";
import { useEffect } from "react";
import ScrollToTop from "ScrollOnTop";
function App() {
  const [appear, setAppear] = useState(true);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Index projects={projects} />} />
          <Route
            path="/contact"
            element={<Contact appear={appear} setAppear={setAppear} />}
          />

          <Route path={"/projects/:name"} element={<PortfolioDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
