import React, { useState } from "react";
// import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function App () {
const [page, setPage] = useState('Home');
 const displayPage = () => {
  if (page === 'Home') {
    return <Home />
  }
  if (page === 'Bio') {
    return <Bio />
  }
  if (page === 'Projects') {
    return <Projects />
  }
}
  return (
    <div>
      <NavBar setPage={setPage} />
      {displayPage ()}
      {/* <Footer /> */}
    </div>
  );

}