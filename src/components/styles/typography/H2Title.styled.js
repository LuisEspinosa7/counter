import styled from 'styled-components';

/* Useful for simple h2 titles */
export const StyledH2Title = styled.h2`
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
    text-shadow: ${props => props.textShadow ? props.textShadow : ''};
    color: ${props => props.color ? props.color : ''};
`

StyledH2Title.displayName = 'h2';