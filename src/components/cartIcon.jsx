import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import styles from './cartIcon.module.css'

const CartIcon = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return (
        <Link to="/cart" className={styles.cartIconContainer}>
            <span className={styles.cartIcon}>🛒</span>
            {totalQuantity > 0 && (
                <span className={styles.badge}>{totalQuantity}</span>
            )}
        </Link>
    )
}

export default CartIcon