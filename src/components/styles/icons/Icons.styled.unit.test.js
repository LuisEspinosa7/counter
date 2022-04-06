import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledFontIcon, StyledIconWrapper, StyledIconTitle } from './Icons.styled';

test('should render StyledIconWrapper with props and hover', () => {
    const component = renderer.create(
        <StyledIconWrapper
            transitionSeconds="0.2s"
            scaleNumber="1.2">
            <StyledFontIcon
                className="fa-solid fa-bars" />
        </StyledIconWrapper>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('-webkit-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('-moz-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('transition', 'all 0.2s ease');

    expect(tree).toHaveStyleRule('transform', expect.anything(), {
        modifier: ':hover'
    });
})


test('should render StyledFontIcon with props and hover', () => {
    const component = renderer.create(
        
        <StyledFontIcon
            className="fa-solid fa-bars" 
            transitionSeconds="0.2s"/>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('-webkit-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('-moz-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('transition', 'all 0.2s ease');

})


test('should render StyledIconTitle by default - no props', () => {
    const component = renderer.create(
        <StyledIconTitle>
            Example
        </StyledIconTitle>
    );
    const tree = component.toJSON();
    expect(tree).not.toHaveStyleRule('padding');
    expect(tree).not.toHaveStyleRule('font-weight');
    expect(tree).not.toHaveStyleRule('font-size');
})

test('should render StyledIconTitle with props and hover', () => {
    const component = renderer.create(
        <StyledIconTitle
            verticalPadding="2rem"
            horizontalPadding="2rem"
            fontWeight="300"
            fontSize="16rem"
            transitionSeconds="0.2s"
            scaleNumber="1.2">
            Example
        </StyledIconTitle>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('-webkit-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('-moz-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('transition', 'all 0.2s ease');

    expect(tree).toHaveStyleRule('transform', expect.anything(), {
        modifier: ':hover'
    });

})