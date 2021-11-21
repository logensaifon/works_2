import styled from "styled-components";


export const DescriptionStyle = styled.div`

    .iconBox {
        width: auto;
        margin-top: 7%;
        margin-bottom: 4%;
        margin-right: 4%;
        margin-left: 4%;

        & .ant-rate {
            margin-top: -20px;
            margin-right: 3%;
        }
    }

    .infoBox {
        width: 88%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        background-color: #e5f3ff;
        border-radius: 5px;
        color: #0053a7;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.45;
        padding: 15px;
        margin-bottom: 10px;
        padding-top: 20px;
        padding-bottom: 20px;


        & a {
            padding-left: 2px;
            color: #e20606;

            :hover {
                text-decoration: underline;
            }
        }
    }

    .articul {
        width: auto;
        height: 100%;
        margin-right: 4%;
        margin-left: 6%;
        font-size: 12px;
        color: #858585;
    }


    .nameBox {
        margin-left: 6%;
        font-size: 23px;
        font-weight: 600;
    }

    .addressBox {
        margin-top: 8px;
        margin-left: 6%;
        font-size: 15px;
        font-weight: 600;
    }
    
    .stockBox {
        margin-top: 8px;
        margin-left: 6%;
        font-size: 15px;
        font-weight: 600;
    }

    .discountPriceBox {
        margin-top: 24px;
        height: 40px;

        & .discountBox {
            font-size: 24px;
            float: left;
            font-weight: 300;
            margin-left: 6%;
            text-decoration-line: line-through;
        }
    
        & .priceBox {
            margin-left: 6%;
            font-size: 24px;
            font-weight: 600;
            float: left;
        }
    }

    .howManyPiecesToAddToCart {
        width: 100%;
        height: auto;
        background: white;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 10px;
        border-top: solid 1px #eaeaea;
        border-bottom: solid 1px #eaeaea;


        &.howManyPiecesToAddToCart .ant-input-number {
            margin-left: 6%;
            margin-bottom: 6%;
        }

        &.howManyPiecesToAddToCart .ant-btn {
            margin-left: 6%;
            width: auto;
            background-color: #e20606;
            background: #e20606;
            border-color: #e20606;

            :hover {
                background-color: #e00606b8;
                background: #e00606b8;
                border-color: #e00606b8;
            }

            & i {
                margin-right: 8px;
            
            }
            
            & i svg {
                margin-top: -6px;
            }
        }

    }

`;