import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledGridContainer } from './GridContainer.styled';


test('should render StyledCounterContainer with props and hover', () => {
    const component = renderer.create(
        <StyledGridContainer
            gridArea="something"
            height="2rem"
            color="red">
            <div>Something</div>
        </StyledGridContainer>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('grid-area', 'something');
    expect(tree).toHaveStyleRule('height', '2rem');
    expect(tree).toHaveStyleRule('color', 'red');
})