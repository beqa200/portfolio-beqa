import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/IndexPortfolio";
import Contact from "./pages/Contact";
import PortfolioDetail from "pages/PortfolioDetail";
import { useState } from "react";
import { projects } from "./data";
import { useEffect } from "react";

function App() {
  const [appear, setAppear] = useState(true);
  const [id, setId] = useState();
  const [projectName, setProjectName] = useState(" ");
  const [previous, setPrevious] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={
              <Index
                id={id}
                setId={setId}
                projectName={projectName}
                projects={projects}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact appear={appear} setAppear={setAppear} />}
          />

          {projects.map((project) => {
            return (
              <Route path={"/projects/:name"} element={<PortfolioDetail />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
