import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StyledFlexContainer } from './FlexContainer.styled';


test('should render StyledFlexContainer with props and hover', () => {
    const component = renderer.create(
        <StyledFlexContainer
            gridArea="something">
            <div>Something</div>
        </StyledFlexContainer>
    );
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('grid-area', 'something');
})