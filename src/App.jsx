import "./App.css";
import { useEffect } from "react";
import { useData } from "./components/DataContext/DataContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const { geteverydata } = useData();

  useEffect(() => {
    geteverydata();
  }, []);

  return (
    <div>
      gdfg
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />4
      </Routes>
    </div>
  );
}

export default App;
