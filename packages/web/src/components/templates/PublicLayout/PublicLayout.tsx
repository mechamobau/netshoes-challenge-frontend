import React, { ReactNode } from 'react';
import CartSidebar from '../../organisms/CartSidebar/CartSidebar';

type Props = {
  children: ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  return (
    <main>
      {children}
      <CartSidebar open />
    </main>
  );
};

export default PublicLayout;
