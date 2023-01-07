import { render, screen } from '@testing-library/react';
import HomePage from './home.page';

describe('Given HomePage component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            const title = /Home/i;
            render(<HomePage />);

            const elementHeader = screen.getByRole('heading', {
                name: title,
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
