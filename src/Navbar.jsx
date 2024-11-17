import "./navbar.css";
export default function Navbar (){
    return(
        
        <div className="navbar">
            <div className="navbar-container">
                {/* logo  */}
                <a href="/" className="logo">SS</a>
                <ul className="navbaritems">

               <li><a href="#home">Home</a></li> 
               <li><a href="#about">About</a></li> 
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}