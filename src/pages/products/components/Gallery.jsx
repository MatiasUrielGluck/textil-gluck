import React from "react";
import { StyledGallery } from "../styled-components";

import whatsapp from "../../../assets/whatsapp.svg";

export const Gallery = () => {
  return (
    <StyledGallery>
      <div>
        <h1>Nuestros productos</h1>

        <div className="gallery-container">
          <div className="card">
            <div className="image">
              <img src={whatsapp} alt="" />
            </div>
            <div className="title">
              <p>Producto de prueba</p>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={whatsapp} alt="" />
            </div>
            <div className="title">
              <p>Producto de prueba</p>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={whatsapp} alt="" />
            </div>
            <div className="title">
              <p>Producto de prueba</p>
            </div>
          </div>
        </div>
      </div>
    </StyledGallery>
  );
};
