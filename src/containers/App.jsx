import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Drum from '../components/Drum';

const GlobalStyle = createGlobalStyle`
    body{
        background: #8d8d8d;
        font-family: 'Russo One', sans-serif;
        text-align: center;
        box-sizing: border-box;
    }
    
`;

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Drum />
        </div>
    )
}

export default App;
