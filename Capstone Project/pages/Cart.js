import React from "react"
import { useContext, useState } from "react/cjs/react.development"
import CartItem from "../Components/CartItem"
import { Context } from '../NewContext'

function Cart() {

    const { cartItems, emptyCart } = useContext(Context)

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const [buttonText, setButtonText] = useState("Place Order")

    const displayCartItems = cartItems.map(item => {
        return <CartItem item={item} key={item.id} />
    })

    function placeOrder() {
        setButtonText("...Ordering")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {displayCartItems}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                {cartItems.length ? <button onClick={() => placeOrder()}> {buttonText} </button> : <p>You have no items in your cart.</p>}
            </div>
        </main>
    )
}

export default Cart