import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../themes/standard';
import { render } from 'enzyme/build';
import Footer from '../../../components/Footer/Footer';
import { shallowWithTheme } from '../../../themes/testSettings';


describe("Component: Footer", () => {

    it('should render', () => {
        /* We use render here because we only need to take the snapshot */
        const { fragment } = render(
            <ThemeProvider theme={theme}>
                <Footer />
            </ThemeProvider>
        )
        const tree = renderer.create(fragment).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('should have 1 paragraph element', () => {
        const wrapper = shallowWithTheme(<Footer />);
        //console.log(wrapper.debug());
        expect(wrapper.find('p')).toHaveLength(1);
    })

})
