import styled from 'styled-components';

export const CardsProductStyle = styled.div`
  border: solid 1px rgb(212, 212, 212);
  width: 100%;
  padding: 16px;

  .h6Basket {
    border-bottom: solid 1px rgb(212, 212, 212);
    height: 30px;
    margin-bottom: 0;
  }

  .h6Total {
    float: right;
    height: 30px;
    margin-top: 8px;
  }

  .boxH6Total {
    height: 30px;
  }

`;

export const CardBasketStyle = styled.div`
  border-bottom: solid 1px rgb(212, 212, 212);
  width: 100%;
  padding-bottom: 8px;
  padding-top: 8px;

  .ant-input-number {
    width: 60px;
  }

  img {
      width: 100%;
      max-width: 110px;
      max-height: 100px;
  }

  button {
    all: unset;
    cursor: pointer;
    display: block;
  }

  a {
    color: black;
    font-weight: 600;
  }
`;