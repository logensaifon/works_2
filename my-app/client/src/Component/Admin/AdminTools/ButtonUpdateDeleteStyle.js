import styled from 'styled-components';


export const ButtonUpdateDeleteStyle = styled.div`
  ${props => props.style}

  & button {
    color: red;
    background-color: white;
    border: solid 1px rgb(255, 122, 122);
    padding-bottom: 2px;
    padding-top: 0;
    padding-right: 16px;
    padding-left: 16px;
    margin-left: 1%;
    margin-right: 1%;
    outline: none;
  }
`;