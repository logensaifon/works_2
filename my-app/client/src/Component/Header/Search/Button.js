import styled from "styled-components";

export const Button = styled.button`
    && {
        all: unset;
        cursor: pointer;
        display: none;
        font-size: 14px;
        font-weight: 500;
    }
    

    @media(max-width: 576px) {
        && {
            display: block;
            margin-left: auto;
            margin-right: auto;
            color: #e20606;
        }
        

    }

`;