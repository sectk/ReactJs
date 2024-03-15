import { Link } from "react-router-dom";

function Nav(){
    return (
      <div className="App">
       <ul>
          <Link to="/"> 
          <li>HOME</li>
          </Link>
          <Link to="/sejarah">
          <li>SEJARAH</li>
          </Link>
          <Link to="/tentang">
          <li>TENTANG</li>
          </Link>
          <Link to="/kontak">
          <li>KONTAK</li>
          </Link>
       </ul>

      </div>
    );
  }
  export default Nav;
