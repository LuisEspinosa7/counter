import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
    background: ${props => props.background ? props.background : ''};
    color: ${props => props.color ? props.color : ''};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : ''};


    -webkit-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;
    -moz-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;
    transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;

    &:hover {
        transform: scale(${props => props.scaleNumber ? props.scaleNumber : 1.1});
        background: ${props => props.hoverBackground ? props.hoverBackground : ''};
        box-shadow: ${props => props.hoverBoxShadow ? props.hoverBoxShadow : ''};
    }
`

StyledButton.displayName = 'button';