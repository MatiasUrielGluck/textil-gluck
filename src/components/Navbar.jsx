import { StyledNavbar } from "../styled-components";
import hambBtn from "../assets/hamb.svg";
import closeBtn from "../assets/close.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavbar>
      <NavLink to="/">
        <h1>Textil Gluck</h1>
      </NavLink>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" onClick={toggleMenu}>
            Productos
          </NavLink>
        </li>
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
