import React, { useContext } from "react"
import { useState } from "react/cjs/react.development"
import {Context} from '../NewContext'

function Image(props) {
   const image = props.img
   const className = props.className
   const [hovered, setHovered] = useState(false)
   const {toggleFavorite,addCart,cartItems,removeCart} = useContext(Context)

   

    function heartIcon() {
        if(image.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(image.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(image.id)}></i>
        }
    }

    function cartIcon() { 
        let check = true;
        cartItems.forEach(cartItem => {
            if(cartItem.id === image.id) check = false
        })
      
        if(check)  
          return  hovered && <i className="ri-add-circle-line cart" onClick = {() => addCart(image)}></i> 
        else {
             return <i className="ri-shopping-cart-fill cart" onClick = {() => removeCart(image)}></i>   
        }
        // return <i className="ri-shopping-cart-fill cart" onClick = {() => addCart(image)}></i>   
    }
    
    return (
         <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <img src = {image.url} className="image-grid"/>
        
            {cartIcon()}
            {heartIcon()}
         </div>
   )
}

export default Image
