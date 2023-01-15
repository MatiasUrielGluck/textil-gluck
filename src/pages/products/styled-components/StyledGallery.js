import styled from "styled-components";

export const StyledGallery = styled.div`
  margin-top: 12px;

  h1 {
    text-align: center;
    margin-bottom: 24px;
  }

  .gallery-container {
    padding: 24px;
    display: grid;
    gap: 36px;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;

    @media (width < 768px) {
      grid-template-columns: repeat(auto-fill, 140px);
    }

    .card {
      position: relative;
      border: 1px solid #d3d3d3;
      border-radius: 6px;
      width: 100%;
      height: 500px;
      padding: 24px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: all 0.3s ease;

      @media (width < 768px) {
        height: 240px;
      }

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      .image {
        width: 100%;

        img {
          object-fit: cover;
          width: 100%;
        }
      }

      .title {
        position: absolute;
        bottom: 24px;
        width: calc(100% - 48px);
        p {
          text-align: center;
        }
      }
    }
  }
`;
