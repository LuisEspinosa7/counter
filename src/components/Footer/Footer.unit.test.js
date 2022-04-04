import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../themes/testSettings';
import Footer from './Footer';

test('renders Footer component', () => {
    renderWithTheme(<Footer />);

    // Counter title
    expect(screen.getAllByRole('contentinfo').length).toBe(1);
})