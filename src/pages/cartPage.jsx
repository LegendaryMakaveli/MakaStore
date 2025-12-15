import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice'
import { Link } from 'react-router'
import styles from './cartPage.module.css'

const CartPage = () => {
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleUpdateQuantity = (id, currentQuantity, change) => {
        const newQuantity = currentQuantity + change
        if (newQuantity > 0) {
            dispatch(updateQuantity({ id, quantity: newQuantity }))
        }
    }

    return (
        <div className={styles.cartPage}>
            <div className={styles.header}>
                <Link to="/products" className={styles.backButton}>
                    Back to Products
                </Link>
                <h1>Shopping Cart ({totalQuantity} items)</h1>
            </div>

            {items.length === 0 ? (
                <div className={styles.emptyCart}>
                    <p>Your cart is empty</p>
                    <Link to="/products" className={styles.shopButton}>
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <>
                    <div className={styles.cartItems}>
                        {items.map(item => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />
                                
                                <div className={styles.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p className={styles.itemPrice}>${item.price}</p>
                                </div>

                                <div className={styles.quantityControls}>
                                    <button 
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                                        className={styles.quantityButton}
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantity}>{item.quantity}</span>
                                    <button 
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                                        className={styles.quantityButton}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className={styles.itemTotal}>
                                    <p>${item.totalPrice.toFixed(2)}</p>
                                    
                                    <button 
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className={styles.removeButton}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cartSummary}>
                        <h2>Order Summary</h2>
                        <div className={styles.summaryRow}>
                            <span>Subtotal:</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span>Total:</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <button className={styles.checkoutButton}>
                            Proceed to Checkout
                        </button>
                        <button 
                            onClick={() => dispatch(clearCart())}
                            className={styles.clearButton}
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartPage