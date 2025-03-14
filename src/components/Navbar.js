import Image from "next/image";
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-container">
        <div className="nav-logo">
          <Image src="..\images\logo.svg" alt="Nailib Logo" width={120} height={40} />
        </div>
          <div className="nav-links">
            <a href="#">IB Resources</a>
            <a href="#">Schools</a>
            <a href="#">Past Papers</a>
            <a href="#">Question Bank</a>
            <a href="#">Pricing</a>
          </div>
          <div className="nav-buttons">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register (Its Free)</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  