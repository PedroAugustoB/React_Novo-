import styled from "styled-components";
import { secundary } from "../../styles/color.jsx";

const Page = styled.div`
    height: 100%;
    width: 100%;

    display:  flex;
    justify-content: center;
    align-items: center;

`;


const Container = styled.div`
    height: 50%;
    width: 25%;
    border-radius: 3rem;
    -webkit-box-shadow: 22px 18px 25px 7px rgba(0,0,0,0.73); 
    box-shadow: 22px 18px 25px 7px rgba(0,0,0,0.73);

    background: ${ secundary };
    display:  flex;
    justify-content: center;
    align-items: center;



`;

export {Container, Page}