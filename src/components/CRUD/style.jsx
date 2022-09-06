import styled from "styled-components";
import { primary, dark } from "../../styles/color";

const Header = styled.header`
    padding: 2rem;
    

    border-radius: 2rem;
    background: ${ primary };
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 7px 6px 11px 4px rgba(0,0,0,0.62); 
    box-shadow: 0px 10px 13px -7px #000000, 7px 6px 11px 4px rgba(0,0,0,0.62);
`; 

const Titulo = styled.h1`
        font-size: 1.5rem;
`;

const Campotexto = styled.input`
    width: 70%;
    padding: 2rem;
    background: #ffffff;
    border: none;
    border-radius: 2rem;

    ::placeholder{
        color: ${ dark };
    }
`;

const botao = styled.button``;

export {Header, Titulo, Campotexto}