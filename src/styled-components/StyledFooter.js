import styled from "styled-components";

export const StyledFooter = styled.div`
    margin-top: 24px;
    border-top: 2px solid #d3d3d3;
    padding: 24px 20%;    

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    @media (width < 768px) {
        padding: 24px;
        flex-flow: column nowrap;
        gap: 12px;
    }

    .left-container {
        p {
            font-weight: 700;
            letter-spacing: 1.5px;
        }
    }

    .right-container {
        display: flex;
        gap: 12px;

        a {
            color: black;
            text-decoration: none;
        }
    }
`;
