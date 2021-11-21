import styled from "styled-components";
// import NoPhoto from "./image/default.png";


export const ImgContentStyle = styled.div`
    width: 85%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 5%;

    .ant-image {
        width: 100%;
        height: 100%;
    }

    .tools {
        /* display: none; */
        width: auto;
        border: solid 1px rgba(0, 0, 0, 0.23);
        position: absolute;
        padding-right: 8px;
        padding-left: 8px;
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 8% 8%;
        margin-left: 38%;
        margin-top: 2%;
        color: rgba(0, 0, 0, 0.23);

        :hover {
            border: solid 1px #222222;
            color: #222222;
        }
    }

    .tools i {
        margin-right: 8px;
        margin-left: 8px;
        cursor: pointer;
        
    }

    p {
        text-align: center;
        padding-top: 6px;
        padding-bottom: 0;
    }
    p i {
        padding-right: 8px;
    }
    p svg {
        margin-bottom: 3px;
    }

    .album {
        border: solid 1px rgba(0, 0, 0, 0.23);
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        padding-bottom: 20%;
    }

`;