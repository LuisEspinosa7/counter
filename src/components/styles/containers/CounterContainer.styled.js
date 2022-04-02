import styled from 'styled-components';
import { StyledGridContainer } from './GridContainer.styled';

/* This is required when you need to apply media queries to some 
containers and components */
export const StyledCounterContainer = styled(StyledGridContainer)`
    
    /* Media Queries */
    @media all and (max-width: 767px){
        width: 21rem;
    }
`

StyledCounterContainer.displayName = 'vid';