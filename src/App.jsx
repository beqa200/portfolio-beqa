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

  useEffect(() => {
    projects.map((project) => {
      if (project.id == id) {
 
        setProjectName(project.linkName);
      }
    });
  }, [id]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio_index"
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
              <Route
                path={"/portfolio_index/" + project.linkName}
                element={
                  <PortfolioDetail
                    name={project.name}
                    screenshot={project.screenshot}
                    info={project.info}
                    siteLink={project.url}
                    preview={project.preview}
                    link = {project.linkName}
                    projects={projects}
                    id={project.id}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
