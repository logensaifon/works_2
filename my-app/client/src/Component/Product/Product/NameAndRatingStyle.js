import styled from "styled-components";


export const NameAndRatingStyle = styled.div`
    width: 100%; 
    height: 70px;
    position: relative;

    a {
        text-decoration: none;
        color: unset;
    }

    .nameBox {
        font-size: 15px;
        font-weight: 500;
        margin-left: 6px;
        margin-right: 6px;
        margin-top: 8px;
        padding-bottom: 24px;
        line-height: 16px;
        color: black;

        :hover {
            color: #e20606;
        }
    }

    & .ant-rate {
        font-size: 14px;
        bottom: 0;
        margin-left: 6px;
        margin-bottom: 8px;
        position: absolute;
    }
`;