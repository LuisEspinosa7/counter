import styled from 'styled-components';

export const StyledGridContainer = styled.div`
    grid-area: ${props => props.gridArea ? props.gridArea : ''};
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns ? props.gridTemplateColumns : ''};
    grid-template-rows: ${props => props.gridTemplateRows ? props.gridTemplateRows : ''};
    height: ${props => props.height ? props.height : ''};
    width: ${props => props.width ? props.width : ''};
    max-height: ${props => props.maxHeight ? props.maxHeight : ''};
    grid-gap: ${props => props.gridGap ? props.gridGap : ''};
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    background: ${props => props.background ? props.background : ''};
    color: ${props => props.color ? props.color : ''};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : ''};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
`

StyledGridContainer.displayName = 'div';