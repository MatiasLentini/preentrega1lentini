import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <button className="btn">
            <ShoppingCartIcon sx={{ color: pink[500] }} />
            <p>1</p>
        </button>
    );
};

export default CartWidget;