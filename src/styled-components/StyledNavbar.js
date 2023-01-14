import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 12px;
  background: #ff6700;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ul {
    display: flex;
    flex-flow: row nowrap;
    gap: 24px;
    list-style-type: none;

    @media (width < 768px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 100;
      background: #ff6700;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      gap: 36px;
      transform: translateX(100%);
      transition: all 0.3s ease;

      &.open {
        transform: translateX(0%);
      }
    }

    li {
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(110%);
      }
    }
  }

  .menu-btn-container {
    z-index: 200;
    display: none;
  
    @media (width < 768px) {
        display: inline-block;
        width: 20px;
        height: 20px;

        img {
            width: 100%;
        }
    }
  }
`;
