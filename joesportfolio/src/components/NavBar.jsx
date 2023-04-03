

export default function NavBar({ setPage }) {
  return (
    <nav>
      <ul >
      
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
      </ul>
    </nav>
  );
}

// NavBar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
// };