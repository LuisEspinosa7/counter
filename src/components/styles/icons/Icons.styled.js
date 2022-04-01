import styled from 'styled-components';
import { StyledFlexContainer } from '../containers/FlexContainer.styled';

/********************/
/****** ICON ********/
/********************/


/* This should be used to wrap only an icon with an effect */
export const StyledIconWrapper = styled(StyledFlexContainer)`
    -webkit-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    -moz-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;

    &:hover {
        transform: scale(${props => props.scaleNumber ? props.scaleNumber : 1.3});
    }
`
StyledIconWrapper.displayName = 'div';



/*  Since this support a ROTATE animation, please use this for displaying your icon. */
export const StyledIcon = styled.img`
    -webkit-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    -moz-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;

    &:hover {
        transform: rotate(${props => props.rotateDegree ? props.rotateDegree : '90deg'});
    }
`
StyledIcon.displayName = 'img';


/*  Useful with FontAwesome icons. Since this support a ROTATE animation, please use this for displaying your icon. */
export const StyledFontIcon = styled.i`
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    -webkit-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    -moz-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;

    &:hover {
        transform: rotate(${props => props.rotateDegree ? props.rotateDegree : '90deg'});
    }
`
StyledIcon.displayName = 'i';



/* This components is perfect when showing your icon text
with an effect */
export const StyledIconTitle = styled.h2`
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    -webkit-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    -moz-transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;
    transition: all ${props => props.transitionSeconds ? props.transitionSeconds : '0.5s'}  ease;

    &:hover {
        transform: scale(${props => props.scaleNumber ? props.scaleNumber : 1.2})
    }
`

StyledIconTitle.displayName = 'h2';