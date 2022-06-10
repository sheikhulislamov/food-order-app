import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}> {/* Using built-in onClick prop to render a forwarded onClick prop from Header.js */}
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>23</span>
        </button>
    );
};

export default HeaderCartButton;