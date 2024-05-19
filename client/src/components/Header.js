import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Header(props){
    let active = ["nav-link", "nav-link", "nav-link", "nav-link", "nav-link"];
    active[Number(props.index)] = "nav-link active";

    return <>
        <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span class="fs-4">ABHIJITH DAMERUPPALA</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item"><Link to="/" className = { active[0] }>Home</Link></li>
            <li class="nav-item"><Link to="/projects" className = { active[1] }>My Projects</Link></li>
            <li class="nav-item"><Link to="/blogs" className = { active[2] }>Blogs</Link></li>
            <li class="nav-item"><Link to="/contact" className = { active[3] }>Contact Me</Link></li>
            <li class="nav-item"><Link to="/about" className = { active[4] }>About Me</Link></li>
          </ul>
        </header>
      </div>
    </>
}

export default Header;