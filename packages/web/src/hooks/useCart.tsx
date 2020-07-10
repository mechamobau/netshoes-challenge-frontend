import { useReducer, useMemo, useCallback, useState } from 'react';

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
      const _productIndex = state.findIndex(
        product => product.id === action.payload.id
      );

      if (_productIndex >= 0) {
        state[_productIndex].count += 0.5;

        return [...state];
      } else {
        return [...state, { ...action.payload, count: 1 }];
      }
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
  const [cartOpened, setCartOpened] = useState(true);

  const totalPrice = useMemo(
    () =>
      state.reduce(
        (previous, current) => previous + current.price * current.count,
        0
      ),
    [state]
  );

  const addProductToCart = useCallback((product: Product) => {
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
    removeProductFromCart,
    cartOpened,
    setCartOpened
  };
});

export { CartProvider };
export default useCart;
