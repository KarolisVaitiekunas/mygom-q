import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../index';

describe('On Dropdown button click', () => {
  it('Dropdown selection and list should be visible', async () => {
    render(<Dropdown />);
    await userEvent.click(await screen.findByRole('button'));

    const dropdownSelection = await screen.findByTestId('dropdown-selection');
    const dropdownList = await screen.findByTestId('dropdown-list');

    expect(dropdownList).toBeVisible();
    expect(dropdownSelection).toBeVisible();
  });
});

describe('On item selection', () => {
  it('Dropdown selection should contain an item', async () => {
    render(<Dropdown />);
    await userEvent.click(await screen.findByRole('button'));

    const dropdownListItems = await screen.findAllByTestId('dropdown-list-item');
    await userEvent.click(dropdownListItems[0]);
    const dropdownSelectionItem = await screen.findByTestId('dropdown-selection-item');

    expect(dropdownSelectionItem).toBeVisible();
  });
});

describe('On item unselect', () => {
  it('Dropdown selection should contain a text', async () => {
    render(<Dropdown />);
    await userEvent.click(await screen.findByRole('button'));

    const dropdownListItems = await screen.findAllByTestId('dropdown-list-item');
    // click first time
    await userEvent.click(dropdownListItems[0]);
    // click second time
    await userEvent.click(dropdownListItems[0]);

    const text = await screen.findByText(/No elements selected/i);

    expect(text).toBeVisible();
  });
});
