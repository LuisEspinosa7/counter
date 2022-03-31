import styled from 'styled-components';

/* Used to declare the app's grid main design */
export const StyledMainContainer = styled.div`
    height: 100%; // Should be 100vh
    max-width: ${({theme}) => theme.mainContainer.maxWidth};
    display: grid;
    grid-template-areas: 
    "navbar  navbar  navbar"
    "content content content"
    "footer  footer  footer";
`

StyledMainContainer.displayName = 'div';