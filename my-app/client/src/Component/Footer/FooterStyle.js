import Styled from "styled-components";


export const FooterStyle = Styled.div`
    padding-bottom: 50px;

    @media screen and (max-width: 576px){
        padding-bottom: 30px;
    }

.divBlock {
    background-Color: #403b2c !important;
    padding-top: 15px;
    font-size: 14px;
}

.block1 {
    max-width: 290px;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
}

.block1 i {
    padding-right: 5px;
    color: #e20606;
}


.address {
    max-width: 290px;
    width: 100%;
    color: white;
    padding-top: 10px;
}

.phone {
    max-width: 290px;
    width: 100%;
    color: white;
    padding-top: 10px;
    font-style: italic;
}

.phone a {
    color: white;
    text-decoration: underline;
    font-style: normal;
}

.mail {
    max-width: 290px;
    width: 100%;
    color: white;
    padding-top: 10px;
}
.mail a, .mail a:hover {
    color: white;
    text-decoration: none;
}



.block2 {
    max-width: 290px;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 14px;
}

.block2 i {
    padding-right: 10px;
    font-Size: 10px; 
    float: left;
    margin-top: 7px;
}

.block2 ul {
    padding: 0;
    width: 200px;
    height: 175px;
    padding-top: 4px;
}

.block2 li {
    padding-top: 5px;
    float: left;
    list-style: none;
    padding-right: 15px;
}

.block2 a {
    color: white;
    text-decoration: underline;
    display: block;
    float: left;
}



.block3 {
    max-width: 290px;
    width: 100%;
    height: 100%;
    color: white;
    padding-bottom: 20px;
}

.iconbox {
    width: 40px;
    height: 40px;
    margin-top: 20px;
    border: solid 1px rgba(116, 116, 116, 0.445);
    border-radius: 25px;
    transition: 200ms;
}
.iconbox:hover {
    background-Color: #e20606;
    cursor: pointer;
}

.iconbox i {
    margin: 8px 8px;
    font-size: 20px;
}

.iconbox a {
    color: white;
}

.agreed {
    width: 100%;
    margin-top: 15px;
    color: rgba(255, 255, 255, 0.356)
}

.agreed a {
    color: white;
    text-decoration: underline;
    opacity: 100%;
}



.Block4 {
    max-width: 290px;
    width: 100%;
    height: 100%;
}
.divIcon {
    padding-top: 20px;
}



.textRecommendation{
    color: white;
    opacity: 30%;
    margin-top: 15px;
    padding-bottom: 5px;
}
`;