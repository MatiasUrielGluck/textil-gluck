import { StyledNavbar } from "../styled-components";
import hambBtn from "../assets/hamb.svg";
import closeBtn from "../assets/close.svg";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavbar>
      <h1>Textil Gluck</h1>

      <ul className={menuOpen ? "open" : ""}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <div className="menu-btn-container" onClick={toggleMenu}>
        {menuOpen ? (
          <img src={closeBtn} alt="" />
        ) : (
          <img src={hambBtn} alt="" />
        )}
      </div>
    </StyledNavbar>
  );
};
