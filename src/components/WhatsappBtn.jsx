import whatsappImage from "../assets/whatsapp.svg";
import { StyledWhatsappBtn } from "../styled-components";

export const WhatsappBtn = () => {
  return (
    <StyledWhatsappBtn>
      <a href="https://api.whatsapp.com/send?phone=541159244579&text=%C2%A1Hola%21+Estoy+en+la+tienda+TEXTIL+GLUCK+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n.">
        <div className="btn-container">
          <img src={whatsappImage} alt="" />
        </div>
      </a>
    </StyledWhatsappBtn>
  );
};
