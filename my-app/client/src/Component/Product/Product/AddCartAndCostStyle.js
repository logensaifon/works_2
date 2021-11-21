import styled from "styled-components";

export const AddCartAndCostStyle = styled.div`
    width: 100%; 
    height: 80px; 
    border-top: solid 1px rgba(0, 0, 0, 0.18);

    .ant-btn {
        width: 100%;
        background-color: #e20606;
        background: #e20606;
        border-color: #e20606;

        :hover {
            background-color: #e00606b8;
            background: #e00606b8;
            border-color: #e00606b8;
        }
    }

    i {
        margin-right: 8px;
        
    }
    i svg {
        margin-top: -6px;
    }
`;