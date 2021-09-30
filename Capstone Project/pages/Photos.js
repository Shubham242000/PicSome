import React, { useContext, useEffect, useState } from 'react'
import { Context } from  '../NewContext'
import {getClass} from '../utils'
import Image from '../Components/Image'

function Photos() {
    const {photos} = useContext(Context)

 
    const displayImages = photos.map((image,i) => {
        return (
        //    <div key = {image.id}> <img src = {image.url}/>  </div>
            <Image key = {image.id} className = {getClass(i)} img = {image}/>
            
            )
    })

    return (
        <main className="photos">
            {displayImages}
        </main>
    )
}
export default Photos;