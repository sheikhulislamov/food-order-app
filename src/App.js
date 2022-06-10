import { useState } from 'react';
 
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />} {/* Cart renders only when cartIsShown is truthy */}
      <Header onShowCart={showCartHandler} /> {/* Forwarding a pointer on a showCartHandler function to the onClick prop on the HeaderCartButton */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
