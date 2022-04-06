import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledParagraph } from './Paragraph.styled';


test('should render StyledParagraph by default - no props', () => {
    const component = renderer.create(
        <StyledParagraph>Example Paragraph</StyledParagraph>
    );
    const tree = component.toJSON();
    expect(tree).not.toHaveStyleRule('padding');
    expect(tree).not.toHaveStyleRule('color');
})