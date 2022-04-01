import styled from 'styled-components';

/* Useful for fill a SVG */
export const StyledSVGMask = styled.div`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
    -webkit-mask: url(hamburger_icon_white.svg) no-repeat center;
    mask: url('hamburger_icon_white.svg') no-repeat center;
`

StyledSVGMask.displayName = 'div';