import styled from "styled-components";
import {Link} from "react-router-dom";

export const ButtonBasket = styled(Link)`
    font-size: 17px;
    color: #222222;
    pointer-events: auto !important;

    :hover {
        text-decoration: none;
        color: unset;
    }

    p {
        float: left;
        margin-top: 3px;
        font-weight: 600;
        padding-right: 2px;
        order: 1;
    }

    i {
        float: left;
        order: 2;
    }


    .sewsBasket {
        border: solid 3px #e20606;
        border-radius: 5px;
        color: white;
        float: left;
        font-weight: 700;
        background-Color: #e20606;
        padding: 0 4px;
        position: relative;
        margin-left: 10px;
        order: 3;
    }

    .sewsBasket::after {
        content: ''; 
        position: absolute;
        left: -15px; 
        top: 7px;
        border: 7px solid transparent;
        border-right: 5px solid #e20606;
    }

    .price {
        float: left;
        font-weight: 600;
        margin-left: 8px;
        margin-top: 5px;
        order: 4;
    }

`;