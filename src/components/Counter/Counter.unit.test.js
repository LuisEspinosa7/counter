import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../themes/testSettings";
import Counter from "./Counter";

test('should render Counter component', () => {
    renderWithTheme(<Counter />);

    // Headings h2 and h4
    expect(screen.getAllByRole('heading').length).toBe(2);
    // Title
    expect(screen.getByRole('heading', {name: /Easy Counter/i})).toBeInTheDocument();
    // Paragraph
    expect(screen.getAllByRole('contentinfo').length).toBe(1);
    // Heading counter
    expect(screen.getByRole('heading', {name: /0/i})).toBeInTheDocument();
    // Control Button
    expect(screen.getAllByRole('button').length).toBe(2);
    expect(screen.getByRole('button', {name: /-/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '+'})).toBeInTheDocument();
})

test('should decrement the number by clicking the - button', () => {
    renderWithTheme(<Counter />);

    // Before click
    expect(screen.getByRole('heading', {name: /0/i})).toBeInTheDocument();
    // Simulate click on - button
    const decrementButton = screen.getByRole('button', {name: /-/i});
    //fireEvent.click(decrementButton);
    userEvent.click(decrementButton);
    // The number should be a -1
    expect(screen.getByRole('heading', {name: /-1/i})).toBeInTheDocument();
})

test('should increment the number by clicking the + button', () => {
    renderWithTheme(<Counter />);
    
    // Before click
    expect(screen.getByRole('heading', {name: /0/i})).toBeInTheDocument();
    // Simulate click on - button
    const incrementButton = screen.getByRole('button', {name: '+'});
    // According to react testing library's advice, userEvent
    // should be used over fireEvent
    //fireEvent.click(incrementButton);
    userEvent.click(incrementButton);
    // The number should be a 1
    expect(screen.getByRole('heading', {name: /1/i})).toBeInTheDocument();
}) 