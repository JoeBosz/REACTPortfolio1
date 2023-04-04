

export default function NavBar({ setPage }) {
  return (
    <nav>
      <ul className="mt-5 flex flex-row justify-center gap-5 uppercase text-lightblue sm:text-xl">
      
        <li>
          <a href="#Home" onClick={() => setPage("Home")}>
            Home
          </a>
        </li>
        
       
        <li>
          <a href="#Bio" onClick={()  => setPage("Bio")}>
            Bio
          </a>
        </li>
        
        <li>
          <a href="#Projects" onClick={() => setPage("Projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={() => setPage("Contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

// NavBar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
// };