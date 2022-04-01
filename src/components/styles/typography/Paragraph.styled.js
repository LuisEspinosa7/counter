import styled from 'styled-components';

/* Useful for simple paragraphs */
export const StyledParagraph = styled.p`
    line-height: ${props => props.lineHeight ? props.lineHeight : ''};
    padding: ${props => props.verticalPadding ? props.verticalPadding : '' } ${props => props.horizontalPadding ? props.horizontalPadding : '' };
    text-align: ${props => props.textAlign ? props.textAlign : ''};
    color: ${props => props.color ? props.color : '#000' };
`

StyledParagraph.displayName = 'p';