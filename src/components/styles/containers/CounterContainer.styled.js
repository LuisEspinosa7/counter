import styled from 'styled-components';
import { StyledGridContainer } from './GridContainer.styled';

export const StyledCounterContainer = styled(StyledGridContainer)`
    background: ${({theme}) => theme.colors.secondary.normal };
`

StyledCounterContainer.displayName = 'main';