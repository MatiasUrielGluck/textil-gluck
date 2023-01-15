import React from "react";
import { StyledGallery } from "../styled-components";
import { products } from "../../../data/products";

export const Gallery = () => {
  return (
    <StyledGallery>
      <div>
        <h1>Nuestros productos</h1>

        <div className="gallery-container">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <div className="image">
                <img src={product.img} alt="" />
              </div>
              <div className="title">
                <p>{product.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledGallery>
  );
};
