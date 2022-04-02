import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../themes/standard';
import { StyledButton } from '../../../../components/styles/buttons/Button.styled';
import { render } from 'enzyme/build';


describe("Component: StyledButton", () => {

    it('should render', () => {
        const { fragment } = render(
            <ThemeProvider theme={theme}>
                <StyledButton />
            </ThemeProvider>
        )
        const tree = renderer.create(fragment).toJSON();
        expect(tree).toMatchSnapshot();
    })

})