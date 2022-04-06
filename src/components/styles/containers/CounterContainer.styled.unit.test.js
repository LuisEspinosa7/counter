import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledCounterContainer } from './CounterContainer.styled';

test('should render StyledCounterContainer with props and hover', () => {
    const component = renderer.create(
        <StyledCounterContainer
            transitionSeconds="0.2s"
            scaleNumber="1.2">
            <p>Something</p>
        </StyledCounterContainer>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('-webkit-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('-moz-transition', 'all 0.2s ease');
    expect(tree).toHaveStyleRule('transition', 'all 0.2s ease');

    expect(tree).toHaveStyleRule('transform', expect.anything(), {
        modifier: ':hover'
    });
})
