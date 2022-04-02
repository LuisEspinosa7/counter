import styled from 'styled-components';
import { StyledGridContainer } from './GridContainer.styled';

/* This is required when you need to apply media queries to some 
containers and components */
export const StyledCounterContainer = styled(StyledGridContainer)`

    -webkit-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;
    -moz-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;
    transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'} ease;

    &:hover {
        transform: scale(${props => props.scaleNumber ? props.scaleNumber : 1.04});
    }
    
    /* Media Queries */
    @media all and (max-width: 767px){
        width: 21rem;
    }
`

StyledCounterContainer.displayName = 'vid';