import styled from 'styled-components';
import { StyledFlexContainer } from './FlexContainer.styled';


export const StyledHeaderContainer = styled(StyledFlexContainer)`
    background: ${({theme}) => theme.colors.primary.normal};
`

StyledHeaderContainer.displayName = 'div';