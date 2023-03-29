import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bio from "./componets/Bio";
import NavBar from "./componets/NavBar";
// import Home from "./componets/Home";
// import Footer from "./componets/Footer";
// import Contact from "./componets/Contact";
// import NoPage from "./componets/NoPage";
import Home from "./pages/Home";


export default function App() {
  return (
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Bio />} />
          <Route path="/" element={<Home />} />
          <Route path="bio" element={<Bio />} />
          {/* <Route path="footer" element={<Footer />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}




// function App() {
//   return (
//     <>
//       <h1> Joe Portfolio </h1>
//       <p>
//       BIO

//       When I was a young boy I like to play minecraft and that sparked and interest in computers. I never really thoughy about builiding them let alone ever learning how to code on one. Till one day my uncle showed me a link and asked if I watned to go for it, considering a majority of my friends are computer science majors or know how to code I thought why not and would go for it. It started a love hate relationship with coding. I love learning but it is very hard sometimes. I enjoy the satisfaction of solving a error or even just gettign a simple container to look nice. I've been enjoying what I learned. 
//       </p>

//       <p>

//       Projects

//       Night Out: This was my first experience in working hands on with a group where we were given a critera and told to try out best with our newly found skills. It was a nice experience with a nice group. It definitley a eye opening  

//       </p>

//     </>
//   );
// }

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/bio" element={<Bio />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="projects" element={<Projects />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }


