import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledIndicator } from './Indicator.styled';

test('should render StyledIndicator by default - no props', () => {
    const component = renderer.create(
        <StyledIndicator>Heading example</StyledIndicator>
    );
    const tree = component.toJSON();
    expect(tree).not.toHaveStyleRule("font-size");
    expect(tree).not.toHaveStyleRule("font-weight");
    expect(tree).not.toHaveStyleRule("text-shadow");
    expect(tree).not.toHaveStyleRule("color");
})

test('should render StyledIndicator with some props', () => {
    const component = renderer.create(
        <StyledIndicator 
            verticalMargin="2rem"
            horizontalMargin="2rem"
            transitionSeconds="3s">
            Heading example
        </StyledIndicator>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule("margin", "2rem 2rem");
    expect(tree).toHaveStyleRule("-webkit-transition", "all 3s ease");
    expect(tree).toHaveStyleRule("-moz-transition", "all 3s ease");
    expect(tree).toHaveStyleRule("transition", "all 3s ease");
})

test('should render StyledIndicator with a prop and with hover', () => {
    const component = renderer.create(
        <StyledIndicator 
            scaleNumber="1.2">
            Heading example
        </StyledIndicator>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('transform', expect.anything(), {
        //media: '(max-width: 640px)'
        modifier: ':hover'
    });
})