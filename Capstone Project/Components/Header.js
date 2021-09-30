import React from "react"
import { Link,Route,Switch } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { Context } from "../NewContext"
function Header() {
    const {cartItems} = useContext(Context)
    console.log(cartItems)
    const cartIcon = () =>  {
        if(cartItems.length) return  <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        else return  <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    }
    return (
        <header>
            <Link to = "/"> <h2>Pic Some</h2> </Link> 
            <Link to = "/cart"> {cartIcon()} </Link>
           
        </header>
    )
}

export default Header
