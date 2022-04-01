import styled from 'styled-components';

/* Useful for simple h4 texts with a scale animation */
export const StyledIndicator = styled.h4`
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
    text-shadow: ${props => props.textShadow ? props.textShadow : ''};

    -webkit-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;
    -moz-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;
    transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;

    &:hover {
        transform: scale(${props => props.scaleNumber ? props.scaleNumber : 1.3});
    }
`

StyledIndicator.displayName = 'h4';