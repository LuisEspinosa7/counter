import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    /* Following the advice from styled components where they indicate that importing fonts globally should not be done */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
    }

    img {
        width: 100%;
        height: 100%;
    }

`

export default GlobalStyles;