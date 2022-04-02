import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../themes/standard';
import { render } from 'enzyme/build';
import { shallowWithTheme } from '../../../themes/testSettings';
import Header from '../../../components/Header/Header';


describe("Component: Header", () => {

    it('should render', () => {
        /* We use render here because we only need to take the snapshot */
        const { fragment } = render(
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        )
        const tree = renderer.create(fragment).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('should have 2 <i> elements and 1 <h2>', () => {
        const wrapper = shallowWithTheme(<Header />);
        //console.log(wrapper.debug());
        expect(wrapper.find('i')).toHaveLength(2);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toContain('Counter');
    })

})