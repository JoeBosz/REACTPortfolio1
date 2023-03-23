import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Bio from "./pages/Bio";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

// function App() {
//   return (
//     <div className="appTitle">
//       Joseph's Porfolio
//       <p>Under Construction</p>
//     </div>

//     <div className="bio"></div>
//   );
// }

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
