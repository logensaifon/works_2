import styled from "styled-components";

export const ComparasionProductStyle = styled.div`
    .rowBoxBorder {
        border: solid 1px rgba(0,0,0,0.18);
        padding-bottom: 2%;
    }

    .ant-image {
            display: flex;
    }

    @media screen and (min-Width: 576px){
            .ant-image {
            height: 200px;
        }
    }

    @media screen and (max-Width: 576px){
            .ant-image {
            height: 250px;
        }
    }

    .ant-carousel {
        padding-left: 4%;
        padding-right: 4%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    img {
        color: #fff;
    }

`;