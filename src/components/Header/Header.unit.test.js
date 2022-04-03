import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../themes/testSettings';
import Header from './Header';

test('renders Header component', () => {
    renderWithTheme(<Header />);

    // Counter title
    expect(screen.getAllByRole('heading').length).toBe(1);
    expect(screen.getByRole('heading', {name: /Counter/i})).toBeInTheDocument();
 
    // Icons
    expect(screen.getAllByRole('img').length).toBe(2);
})