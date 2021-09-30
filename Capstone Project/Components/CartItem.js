import React from 'react'
import { useContext, useState } from 'react/cjs/react.development'
import { Context } from '../NewContext'
function CartItem({item}) {
    const {removeCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    function trashIcon() {
        if(hovered) {
            return "ri-delete-bin-fill"
        }
        else return "ri-delete-bin-line"
    }
 
    return (
        <div className="cart-item">
        <i className={trashIcon()} 
           onClick={() => removeCart(item)}
           onMouseEnter = {() => setHovered(true)} 
           onMouseLeave = {() => setHovered(false)}
        >

        </i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
    </div>
    )
}
export default CartItem