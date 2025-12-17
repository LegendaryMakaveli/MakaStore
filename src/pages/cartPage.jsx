import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice'
import { Link } from 'react-router'
import deleteButton from "../assets/delete.png"
import NavBar from '../components/NavBar'

const CartPage = () => {
  const { items, totalAmount } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const updateQty = (id, qty, delta) => {
    const newQty = qty + delta
    if (newQty > 0) {
      dispatch(updateQuantity({ id, quantity: newQty }))
    }
  }

  return (
    <>
    <NavBar />
    <div className="max-w-7xl mx-auto px-4 py-8">

      <p className="text-sm text-gray-400 mb-6">
        <Link to="/products" className="hover:underline">Home</Link> &gt; Cart
      </p>

      <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {items.map(item => (
              <div
                key={item.id}
                className="flex gap-4 border border-red-900 rounded-3xl p-4 items-center"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                </div>

                <div className="flex items-center bg-gray-100 rounded-full px-3">
                  <button
                    onClick={() => updateQty(item.id, item.quantity, -1)}
                    className="px-2 text-lg"
                  >
                    −
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.id, item.quantity, 1)}
                    className="px-2 text-lg"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ${item.totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                    onClick={() => dispatch(removeFromCart(item.id))} className="ml-auto md:ml-0">
                    <img  className="w-5 h-5 cursor-pointer" src={deleteButton} alt="" />
                </button>
              </div>
            ))}
            <div className="text-center">
            <button onClick={() => dispatch(clearCart())} className="w-[150px] h-[50px] border rounded-full bg-black text-white font-extrabold hover:opacity-60">
            Clear Cart
          </button>
          </div>
          </div>






          <div className="border rounded-xl p-6 h-fit">
            <h2 className="font-semibold text-lg mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2 text-sm text-red-500">
              <span>Discount (-20%)</span>
              <span>-${(totalAmount * 0.2).toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-sm">
              <span>Delivery Fee</span>
              <span>$15</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>
                ${(totalAmount * 0.8 + 15).toFixed(2)}
              </span>
            </div>

            <div className="flex gap-2 mb-4">
              <input
                placeholder="Add promo code"
                className="border rounded-full px-4 py-2 w-full text-sm"
              />
              <button className="bg-black text-white px-5 rounded-full text-sm font-extrabold">
                Apply
              </button>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full flex items-center font-extrabold justify-center gap-2 hover:opacity-90">
              Go to Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default CartPage
