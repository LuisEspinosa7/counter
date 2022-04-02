import { ThemeConsumer } from 'styled-components';
import { shallow } from 'enzyme/build';
import { theme } from './standard';


/* This is an approach to solve the enzyme tests when using a
   Styled components Theme
 */
export const shallowWithTheme = (children, them = theme) => {
    ThemeConsumer._currentValue = them;
    return shallow(children);
}