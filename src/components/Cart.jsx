import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeCart } from '../store/slices/productSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.products.cartItems)

    const totalPrice = cartItems.reduce((total, item) => {
        const itemPrice = +(item.price.replace("$", "")) // Parse price as a number
        return total + itemPrice * item.quantity
    }, 0)

    return (
        <div className="max-w-4xl mx-auto mt-10 border-indigo-500 border-2 p-6 bg-gray-100 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

            <div className="space-y-4">
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg">
                        Your cart is empty. 🛒
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex border-indigo-500 border-2 items-center justify-between bg-white p-4 rounded-lg shadow-md"
                        >
                            <div className="flex w-[70%] items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.category}</p>
                                    <p className="text-sm font-medium text-indigo-600">{item.price}</p>
                                </div>
                            </div>

                            <div className="md:w-[10%] flex flex-col md:flex-row md:gap-2 items-center justify-center">
                                <button
                                    onClick={() => dispatch(decrementQuantity(item.id))}
                                    className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                                >
                                    -
                                </button>
                                <span className="font-semibold">{item.quantity}</span>
                                <button
                                    onClick={() => dispatch(incrementQuantity(item.id))}
                                    className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() => dispatch(removeCart(item.id))}
                                className="w-[20%] cursor-pointer text-red-500 font-bold hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">Total:</h3>
                <p className="text-xl font-semibold text-indigo-600">${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cart
