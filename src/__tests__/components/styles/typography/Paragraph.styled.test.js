import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../themes/standard';
import { render } from 'enzyme/build';
import { StyledParagraph } from '../../../../components/styles/typography/Paragraph.styled';


describe("Component: StyledParagraph", () => {

    it('should render', () => {
        const { fragment } = render(
            <ThemeProvider theme={theme}>
                <StyledParagraph />
            </ThemeProvider>
        )
        const tree = renderer.create(fragment).toJSON();
        expect(tree).toMatchSnapshot();
    })

})