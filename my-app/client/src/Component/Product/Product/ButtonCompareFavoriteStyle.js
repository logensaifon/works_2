import styled from 'styled-components';

export const ButtonCompareFavoriteStyle = styled.div`
    ${props => props.style}

    & button {
        all: unset;
        cursor: pointer;
        margin-right: 8px;
        margin-left: 8px;
    }
`;