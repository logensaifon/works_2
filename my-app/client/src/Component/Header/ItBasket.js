import styled from "styled-components";
import Basket from "../Basket/Basket";

export const ItBasket = styled(Basket)`
    width: auto;
    height: 40px;
    float: right;
    padding-right: 32px !important;
    padding-right: 0;

    @media(max-width: 1200px) {
        padding-right: 0 !important;
        p {
            display: none;
        }
    }

    @media(max-width: 768px) {
        float: unset;
        display: block;
        width: 184px;
        margin-left: auto;
        margin-right: auto;

        p {
            display: none;
        }
    }

    @media(max-width: 576px) {
        display: none;
    }

`;