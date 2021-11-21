import styled from "styled-components";



export const ShowcaseStyle = styled.div`
    max-width: 450px;
    width: 100%;
    border: solid 1px rgba(0, 0, 0, 0.18);
    

    .priceBox {
        text-align: center;
        font-size: 22px;
        font-weight: 500;
        padding-top: 2px;
        padding-bottom: 2px;
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
    }

    img {
        color: #fff;
    }

`;
