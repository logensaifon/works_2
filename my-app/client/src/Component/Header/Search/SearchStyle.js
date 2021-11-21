import styled from "styled-components";

export const SearchStyle = styled.div`
    width: auto;
    height: 40px;
    position: relative;
    padding-top: 11px;


input {
    width: 100%;
    height: 40px; 
    padding: 5px 20px;
    border: none;
    border-radius: 25px;
    position: absolute;
    outline: none;
    box-shadow: 0 0 3px #22222275;
    font-size: 14px;
}
input:focus {
    box-shadow: 0 0 10px #22222275;
}

a {
    position: relative;
    float: right;
    margin-top: 8px;
    color: #e20606;
    margin-right: 10px; 
}


    @media(max-width: 576px) {
        display: ${props=>props.handle ? "block" : "none"}
    }

    @media screen and (max-width: 767px) {
        width: auto;
        margin-bottom: 5px;
        
        
        input {
            width: 100%;
        }

        
        a {
            float: right;
            margin-right: 20px;

        }
    }
`;