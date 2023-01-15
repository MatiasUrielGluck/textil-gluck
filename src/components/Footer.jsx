import { StyledFooter } from "../styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="left-container">
        <p>TEXTIL GLUCK</p>
        <p>Tel: 1159244579</p>
      </div>
      <div className="right-container">
        <a href="https://www.facebook.com/TEXTILGLUCK" target="_blank">
          <i className="fa-brands fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/textilgluck/" target="_blank">
          <i className="fa-brands fa-square-instagram fa-2x"></i>
        </a>
        <a href="mailto:textilglucksrl@gmail.com" target="_blank">
          <i className="fa-solid fa-envelope fa-2x"></i>
        </a>
      </div>
    </StyledFooter>
  );
};
