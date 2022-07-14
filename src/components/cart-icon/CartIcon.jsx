import './styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


const CartIcon = () => {
  const {setisCartOpen, cartCount} = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setisCartOpen((prev) => !prev)
  }

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
