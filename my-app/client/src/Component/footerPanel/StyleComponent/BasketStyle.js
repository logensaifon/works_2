import styled from "styled-components";
import Basket from "../../Basket/Basket";

export const BasketStyle = styled(Basket)`
padding-left: 4px;
padding-right: 2px;
float: right;
padding-top: 10px;
padding-bottom: 10px;
pointer-events: none;

p {
    display: none ;
}

i {
    position: relative !important;
    float: left !important;
}


@media(max-width: 992px) {
    padding-top: 8px;
    padding-bottom: 8px;

i {
        margin-right: 8px !important;
    }
}

@media(max-width: 768px) {

}

@media(max-width: 576px) {
    margin-top: 2px;
    margin-bottom: 2px;
    float: left;
    padding-top: 0;
    padding-bottom: 0;

    i {
        height: auto;
        float: left  !important;
        padding-left: 0;
        margin-left: 16%;
        position: relative !important;
    }
    .price {
        display: none;
    }
    p {
        display: none;
    }
    .sewsBasket {
        display: none;
        all: unset;
        color: unset;
        position: absolute;
        right: 16%;

        ::after {
            all: unset;
        }
    }
}
`;
