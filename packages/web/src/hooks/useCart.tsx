import React, { useReducer, useMemo, useCallback, useEffect } from 'react';

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

export type ProductCart = Product & {
  count: number;
};

type State = ProductCart[];

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionEnum.ADD:
      console.log('add');
      const _productIndex = state.findIndex(
        product => product.id === action.payload.id
      );

      if (_productIndex >= 0) {
        state[_productIndex].count += 0.5;

        return [...state];
      }

      const _newProduct = { ...action.payload, count: 1 };

      return [...state, _newProduct];

    case ActionEnum.REMOVE:
      return state.filter(product => product.id !== action.payload.id);
    default:
      throw new Error(`The provided action it's not an ActionEnum`);
  }
};

const initialState: ProductCart[] = [];

/**
 * React Provider and Hook that is responsible of add, remove and store items
 * from cart
 */
const [CartProvider, useCart] = constate(() => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const totalPrice = useMemo(
    () =>
      state.reduce(
        (previous, current) => previous + current.price * current.count,
        0
      ),
    [state]
  );

  const addProductToCart = useCallback((product: Product) => {
    console.log('addproductfn');
    dispatch({
      type: ActionEnum.ADD,
      payload: product
    });
  }, []);

  const removeProductFromCart = useCallback(
    (id: Product['id']) =>
      dispatch({
        type: ActionEnum.REMOVE,
        payload: { id }
      }),
    []
  );

  return {
    cartProducts: state,
    addProductToCart,
    totalPrice,
    removeProductFromCart
  };
});

export { CartProvider };
export default useCart;
