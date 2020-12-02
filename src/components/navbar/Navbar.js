import React,{useState} from "react";
import './Navbar.css';


function Navbar() {
    const [open,setOpen]=useState(false);


    return (
        <div>
        <nav>
        <i className="fas fa-bars burger" onClick={() => setOpen(!open)}></i>
        <div className="logo"> React Div </div>
        <div>
        <ul className="nav-links" style={{transform: open ? "translateX(0px)" : " "}}>
            <li><a>Home</a></li>
            <li><a>Product</a></li>
            <li><a>Services</a></li>
            <li><a>Contact us</a></li>


        </ul>
        </div>
        
        </nav>
    </div>
    );
    
    
}
export default Navbar;