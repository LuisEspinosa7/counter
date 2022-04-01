import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
    grid-area: ${props => props.gridArea ? props.gridArea : ''};
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    gap: ${props => props.gap ? props.gap : ''};
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''};
    max-width:  ${props => props.maxWidth ? props.maxWidth : ''};
    background: ${props => props.background ? props.background : ''};
    color: ${props => props.color ? props.color : ''};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : ''};
    z-index: ${props => props.zIndex ? props.zIndex : ''};
`

StyledFlexContainer.displayName = 'div';