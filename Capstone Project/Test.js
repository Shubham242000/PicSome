import React, { useContext } from 'react'
import Header from './Components/Header'
import Cart from './pages/Cart'
import { Context } from './NewContext'
import Photos from "./pages/Photos"
import {Link, Switch, Route} from 'react-router-dom'

function Test() {
   
    return (
        <>  
            <Header />
            
            <Switch>
                <Route path = "/" exact> <Photos/> </Route>
                <Route path = "/cart"> <Cart/> </Route>
                <Route></Route>
            </Switch>
        </>
    )
}
export default Test