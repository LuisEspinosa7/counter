import styled from 'styled-components';
import { StyledFlexContainer } from './FlexContainer.styled';

export const StyledAppContainer = styled(StyledFlexContainer)`
    background: ${({theme}) => theme.colors.primary.normal };
`

StyledAppContainer.displayName = 'main';