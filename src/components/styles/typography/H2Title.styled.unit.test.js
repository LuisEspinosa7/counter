import React from 'react';
import renderer from 'react-test-renderer';
import "jest-styled-components";
import { StyledH2Title } from './H2Title.styled';

test('should render H2Titlte by default - no props', () => {
    const component = renderer.create(
        <StyledH2Title>Example title</StyledH2Title>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toHaveStyleRule("margin");
    expect(tree).not.toHaveStyleRule("font-size");
    expect(tree).not.toHaveStyleRule("font-weight");
    expect(tree).not.toHaveStyleRule("text-shadow");
    expect(tree).not.toHaveStyleRule("color");
})