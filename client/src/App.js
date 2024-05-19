import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/projects" element = {<Projects />}></Route>
        <Route path="/blogs" element = {<Blogs />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
        <Route path="/about" element = {<About />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
