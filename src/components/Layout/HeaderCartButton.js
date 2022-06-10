import { useContext } from 'react'; // We need to use Context, but not Provider

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext); // Getting acces to Cart Context which manages by Provider

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0); // reduce() transforms an array of data into a single value; 0 is a starting value

    return (
        <button className={classes.button} onClick={props.onClick}> {/* Using built-in onClick prop to render a forwarded onClick prop from Header.js */}
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span> {/* {numberOfCartItems} outputs the number of Cart Items */}
        </button>
    );
};

export default HeaderCartButton;