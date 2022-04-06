import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledButton } from './Button.styled';

test('should render StyledButton by defaul - no props and hover', () => {
    const component = renderer.create(
        <StyledButton>Button</StyledButton>
    );
    const tree = component.toJSON();
    expect(tree).not.toHaveStyleRule('padding');
    expect(tree).not.toHaveStyleRule('font-size');
    expect(tree).not.toHaveStyleRule('background');
    expect(tree).not.toHaveStyleRule('color');
    expect(tree).not.toHaveStyleRule('border-radius');
    expect(tree).not.toHaveStyleRule('box-shadow');
    expect(tree).not.toHaveStyleRule('border');
    
    // Hover and box shadow
    expect(tree).not.toHaveStyleRule('box-shadow', expect.anything(), {
        modifier: ':hover'
    });
})

test('should render StyledButton with props and hover', () => {
    const component = renderer.create(
        <StyledButton
            verticalMargin="2rem"
            horizontalMargin="2rem"
            fontWeight="300"
            transitionSeconds="2s"
            scaleNumber="1.1"
            hoverBackground="rgba(0, 0, 0, 0.2)">
            Button
        </StyledButton>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('margin', '2rem 2rem');
    expect(tree).toHaveStyleRule('font-weight', '300');
    expect(tree).toHaveStyleRule('-webkit-transition', 'all 2s ease');
    expect(tree).toHaveStyleRule('-moz-transition', 'all 2s ease');
    expect(tree).toHaveStyleRule('transition', 'all 2s ease');

    // Scale and hover
    expect(tree).toHaveStyleRule('transform', expect.anything(), {
        modifier: ':hover'
    });

    expect(tree).toHaveStyleRule('background', expect.anything(), {
        modifier: ':hover'
    });
})