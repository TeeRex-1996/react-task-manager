import React from "react";
import { Link } from "react-router-dom";
const  Navbar : React.FC = () =>{
    return(
       <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
       <div className="container-fluid">
        <a className="navbar-brand">Brand</a>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/dashboard' className="nav-link">Home</Link>
                    </li>
                <li className="nav-item"><Link to='register' className="nav-link">Register</Link></li>
                <li className="nav-item"><Link to='tasklist' className="nav-link">Task List</Link></li>
                <li className="nav-item" ><Link to='about' className="nav-link" >About</Link></li>
            </ul>
        </div>
       </div>
        </nav>
       </React.Fragment>
    )
}

export default Navbar;