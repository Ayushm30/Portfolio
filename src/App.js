import React from "react";
import "./index.css";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Project from "./routes/Project.js";
import Contact from "./routes/Contact.js";

import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <><div> 
    <Routes>
      <Route path ="/" element ={<Home />}/>
      <Route path = "/project.js" element ={<Project />} />
      <Route path ="/about.js" element = {<About />} />
      <Route path = "/contact.js" element={<Contact />}/>
    </Routes>
    </div>
    </>
  );
}
export default App;
