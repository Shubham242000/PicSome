import React, { createContext } from 'react'
import { useEffect, useState } from 'react/cjs/react.development';

const Context = createContext(); 

function NewContext(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(async () => {
        const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        const data = await res.json()
        setPhotos(data)
    }, [])

    function toggleFavorite(id) {
        const updatedPhotos = photos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo , 
                    isFavorite : !photo.isFavorite
                }
            }
            return photo
        })
        setPhotos(updatedPhotos)
    }

    function addCart(image) {
        setCartItems(prevItems => [...prevItems, image])
    }

    function removeCart(image) {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== image.id)
        setCartItems(updatedCartItems)
    }

    function emptyCart() {
        setCartItems([])
    }
   

   return (
   <Context.Provider value = {{photos,toggleFavorite,addCart,cartItems,removeCart,emptyCart}}>
        {props.children}
    </Context.Provider>
   )
}
export {NewContext, Context}