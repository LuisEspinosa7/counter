import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../themes/standard';
import { render } from 'enzyme/build';
import { shallowWithTheme } from '../../../themes/testSettings';
import Counter from '../../../components/Counter/Counter';

import * as reactModule from "react";

describe("Component: Counter", () => {
    
    it('should render', () => {
        /* We use render here because we only need to take the snapshot */
        const { fragment } = render(
            <ThemeProvider theme={theme}>
                <Counter />
            </ThemeProvider>
        )
        const tree = renderer.create(fragment).toJSON();
        expect(tree).toMatchSnapshot();
    })
    

    it('should have 1 <h2>, 1 <h4> and 2 <button>', () => {
        const wrapper = shallowWithTheme(<Counter />);
        //console.log(wrapper.debug());
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toContain('Easy Counter');
        expect(wrapper.find('h4')).toHaveLength(1);
        expect(wrapper.find('h4').text()).toContain('0');
        expect(wrapper.find('button')).toHaveLength(2);
    })

    
    it('should increment by 1 when plus button is clicked - view change', () => {
        const wrapper = shallowWithTheme(<Counter />);

        //console.log(wrapper.debug());
        expect(wrapper.find('h4').text()).toContain('0');
        wrapper.find('#btnIncrement').simulate("click");
        expect(wrapper.find('h4').text()).toContain('1');
    })
    


    it('should decrement by 1 when minus button is clicked - view change', () => {
        const wrapper = shallowWithTheme(<Counter />);
        //console.log(wrapper.debug());
        expect(wrapper.find('h4').text()).toContain('0');
        wrapper.find('#btnDecrement').simulate("click");
        expect(wrapper.find('h4').text()).toContain('-1');
    })
    
    
    /*
        Component STATE related tests..., It is not neccesary nor recommended by
        reactJS, since nowadays tests should be done trying to follow 
        the user behaviours and assert againts the actions and changes on the
        screen.
    */
    it('should increment by 1 - state mock', () => {

        let setCounter = jest.fn(x => {});
        reactModule.useState = jest.fn().mockImplementationOnce(x => [x, setCounter]);

        const wrapper = shallowWithTheme(<Counter />);
        //console.log(wrapper.debug());

        wrapper.find('#btnIncrement').simulate("click");
        // The state incremented by 1
        expect(setCounter).toHaveBeenCalledWith(1);
    })
    
    
    it('should decrement by 1 - state mock', () => {

        let setCounter = jest.fn(x => {});
        reactModule.useState = jest.fn().mockImplementationOnce(x => [x, setCounter]);

        const wrapper = shallowWithTheme(<Counter />);

        //console.log(wrapper.debug());

        wrapper.find('#btnDecrement').simulate("click");
        // The state decremented by 1
        expect(setCounter).toHaveBeenCalledWith(-1);
    })

})