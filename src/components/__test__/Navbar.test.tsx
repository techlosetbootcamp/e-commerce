// src/components/__tests__/Navbar.test.tsx

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Navbar from '../Navbar';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore();
const store = mockStore({ cart: [] });


describe('Navbar Component', () => {
  it('renders Navbar component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path='/'
            element={
              <Navbar setShowCart={() => {}} />
            }
              />
             
            </Routes>
          </Router>
        </Provider>
      );
    });

    expect(screen.getByText(/signin/i)).toBeInTheDocument();
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  
  const searchInput = screen.getByPlaceholderText('Search');
  expect(searchInput).toBeInTheDocument();

  const signInLink = screen.getByText('signin');
  expect(signInLink).toBeInTheDocument();

  const cartIcon = screen.getByTestId('cart-icon');
  expect(cartIcon).toBeInTheDocument();
});
});


test('displays correct cart count', () => {
  const cartItems = Array(3).fill({});
  const storeWithItems = mockStore({ cart: cartItems });

  act(() => {
    render(
      <Provider store={storeWithItems}>
        <Router>
          <Navbar setShowCart={() => {}} />
        </Router>
      </Provider>
    );
  });

  const cartCount = screen.getByText('3');
  expect(cartCount).toBeInTheDocument();
});

test('allows typing in search input', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar setShowCart={() => {}} />
        </Router>
      </Provider>
    );
  });

  const searchInput = screen.getByPlaceholderText('Search');
  userEvent.type(searchInput, 'laptop');

  expect(searchInput).toHaveValue('laptop');
});

test('clicking cart icon triggers setShowCart', () => {
  const setShowCartMock = jest.fn();

  act(() => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar setShowCart={setShowCartMock} />
        </Router>
      </Provider>
    );
  });

  const cartIcon = screen.getByTestId('cart-icon');
  userEvent.click(cartIcon);

  expect(setShowCartMock).toHaveBeenCalledTimes(1);
});

test('renders "Browse By Category" link', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar setShowCart={() => {}} />
        </Router>
      </Provider>
    );
  });

  const browseByCategoryLink = screen.getByText('Browse By Category');
  expect(browseByCategoryLink.closest('a')).toHaveAttribute('href', '/productsCategory');
});
