import React from 'react';

// Creating React Context
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
});

export default CartContext;