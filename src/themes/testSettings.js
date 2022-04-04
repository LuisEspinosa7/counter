import { ThemeConsumer } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from './standard';


/* This is an approach to Wrap the tested component
   inside the theme when using a Styled components Theme
 */
export const renderWithTheme = (children, them = theme) => {
    ThemeConsumer._currentValue = them;
    return render(children);
}