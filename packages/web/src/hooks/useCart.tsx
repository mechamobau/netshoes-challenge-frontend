import React, { useReducer } from 'react';

import constate from 'constate';
import { Product } from '../services/products';

enum ActionEnum {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

type Action =
  | {
      type: ActionEnum.ADD;
      payload: Product;
    }
  | {
      type: ActionEnum.REMOVE;
      payload: Pick<Product, 'id'>;
    };

type State = Product[];

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionEnum.ADD:
      return [...state, action.payload];
    case ActionEnum.REMOVE:
      return state.filter(product => product.id !== action.payload.id);
    default:
      throw new Error(`The provided action it's not an ActionEnum`);
  }
};

const initialState: Product[] = [];

/**
 * React Provider and Hook that is responsible of add, remove and store items
 * from cart
 */
const [CartProvider, useCart] = constate(() => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProductToCart = (product: Product) =>
    dispatch({
      type: ActionEnum.ADD,
      payload: product
    });

  const removeProductFromCart = (id: Product['id']) =>
    dispatch({
      type: ActionEnum.REMOVE,
      payload: { id }
    });

  return {
    cartProducts: state,
    addProductToCart,
    removeProductFromCart
  };
});

export { CartProvider };
export default useCart;
