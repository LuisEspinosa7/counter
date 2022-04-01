import styled from 'styled-components';
import { StyledFlexContainer } from './FlexContainer.styled';


export const StyledHeaderContainer = styled(StyledFlexContainer)`
    background: ${({theme}) => theme.colors.primary.normal};
    height: ${({theme}) => theme.header.height };
    color: ${({theme}) => theme.colors.white.normal};
`

StyledHeaderContainer.displayName = 'div';