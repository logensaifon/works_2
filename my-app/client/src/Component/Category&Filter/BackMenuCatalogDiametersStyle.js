import styled from 'styled-components';

export const BackMenuCatalogDiametersStyle = styled.div`
    margin-top: 40px;
    padding-bottom: 35px;

    @media screen and (max-width: 767px){
        margin-top: 0;
    }

    .buttonDiametrBox {
        background: #f6f6f6;
        padding-top: 4px;
        padding-bottom: 4px;

        & button {
            margin-left: 2px;
            margin-bottom: 2px;
        }
    }

    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
  
`;