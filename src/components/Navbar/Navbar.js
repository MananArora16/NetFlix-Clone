import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    console.log(show);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav__black " : ""}`}>
      <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo" />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix-avatar"
      />
    </div>
  );
};

export default Navbar;
