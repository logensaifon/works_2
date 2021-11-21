import styled from "styled-components";


export const FilterStyle = styled.div`
    .handleButton {
        background: #f6f6f6;
        margin-bottom: 16px;
        margin-top: 16px;
        padding-bottom: 4px;
        padding-top: 4px;
        text-align: center;
        display: none;
        font-weight: 400;

        button {
            all: unset;
            cursor: pointer;
        }

        @media screen and (max-width: 767px){
            display: block;
        }
    }

    .formBox {
        width: 100%;
        background: #f6f6f6;
        padding-left: 6%;
        padding-right: 6%;
        margin-top: 16%;
        margin-bottom: 16%;
        display: ${props => props.handleFormBox ? "block" : "none"};
        
        & .ant-btn {
            width: auto;
            margin-left: auto;
            margin-right: auto;
        }

        @media screen and (max-width: 767px){
            margin-bottom: 0;
            margin-top: 0;
        }

        @media screen and (min-width: 768px){
            margin-top: 42px;
            display: block;
        }
    }
`;