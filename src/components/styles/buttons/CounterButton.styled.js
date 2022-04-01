import styled from 'styled-components';
import { StyledButton } from './Button.styled';

export const StyledCounterButton = styled(StyledButton)`
    background: ${({theme}) => theme.colors.primary.normal };
    color: ${({theme}) => theme.colors.secondary.normal};
`

StyledCounterButton.displayName = 'main';