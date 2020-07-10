import React, { ReactNode } from 'react';
import CartSidebar from '../../organisms/CartSidebar/CartSidebar';
import useCart from '../../../hooks/useCart';

type Props = {
  children: ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  const { cartOpened } = useCart();

  return (
    <main>
      {children}
      <CartSidebar open={cartOpened} />
    </main>
  );
};

export default PublicLayout;
