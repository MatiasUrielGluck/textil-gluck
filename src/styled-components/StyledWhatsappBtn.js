import styled from "styled-components";

export const StyledWhatsappBtn = styled.div`
  width: 80px;
  height: 80px;
  padding: 18px;
  border-radius: 50%;
  z-index: 50;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #4dc247;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition: all 0.3s ease;

  .btn-container img {
    width: 100%;
  }

  &:hover {
    transform: scale(105%);
  }

  &:active {
    transform: scale(95%);
  }
`;
