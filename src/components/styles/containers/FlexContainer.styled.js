import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
    grid-area: ${props => props.gridArea ? props.gridArea : ''};
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    gap: ${props => props.gap ? props.gap : ''};
    background: ${({theme}) => theme.colors.primary.normal};
    color: ${({theme}) => theme.colors.white.normal};
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    width: ${props => props.width ? props.width : ''};
    height: ${({theme}) => theme.header.height };
`

StyledFlexContainer.displayName = 'div';