import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../themes/standard';
import { render } from 'enzyme/build';
import { StyledFlexContainer } from '../../../../components/styles/containers/FlexContainer.styled';


describe("Component: StyledFlexContainer", () => {

    it('should render', () => {
        const { fragment } = render(
            <ThemeProvider theme={theme}>
                <StyledFlexContainer />
            </ThemeProvider>
        )
        const tree = renderer.create(fragment).toJSON();
        expect(tree).toMatchSnapshot();
    })

})