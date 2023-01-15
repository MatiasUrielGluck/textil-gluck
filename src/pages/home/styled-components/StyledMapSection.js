import styled from "styled-components";

export const StyledMapSection = styled.div`
  padding: 24px;

  h1 {
    text-align: center;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    margin-bottom: 24px;
    letter-spacing: 1px;
  }

  .map-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    iframe {
      border: none;
      width: 100%;
      max-width: 900px;
    }
  }
`;
