import styled from 'styled-components';
import { StyledFlexContainer } from './FlexContainer.styled';

/* User for simple centered footer content */
export const StyledFooterContainer = styled(StyledFlexContainer)`
    background: ${({theme}) => theme.colors.primary.normal};
    color: ${({theme}) => theme.colors.white.normal};
`

StyledFooterContainer.displayName = 'div';