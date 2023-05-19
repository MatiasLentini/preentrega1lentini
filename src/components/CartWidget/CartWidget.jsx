import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <button className="btn">
            <ShoppingCartIcon />
            <p>1</p>
        </button>
    );
};

export default CartWidget;