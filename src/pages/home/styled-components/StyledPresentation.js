import styled from "styled-components";
import background from "../../../assets/background.webp";

export const StyledPresentation = styled.div`
  min-height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  @media (width < 768px) {
    padding: 12px;
  }

  &::before {
    content: "";
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.6;
  }

  h1, h3 {
    position: relative;
    text-align: center;
    color: black;
  }

  h3 {
    font-size: 22px;
    margin-top: 8px;
  }

  @media (width < 768px) {
    min-height: initial;

    h3 {
        margin-top: 18px;
    }
  }
`;
