import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../themes/standard';
import { render } from 'enzyme/build';
import { StyledMainContainer } from '../../../../components/styles/containers/MainContainer.styled';


describe("Component: StyledMainContainer", () => {

    it('should render', () => {
        const { fragment } = render(
            <ThemeProvider theme={theme}>
                <StyledMainContainer />
            </ThemeProvider>
        )
        const tree = renderer.create(fragment).toJSON();
        expect(tree).toMatchSnapshot();
    })

})