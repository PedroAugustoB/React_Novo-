import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body{
        height: 100%;
        width: 100%;
        text-rendering: optimizeLegibility;
        font-family: 'Courier New',Courier,monospace;
    }

    html{
        font-size: 62.5%;
    }

    #root{
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle