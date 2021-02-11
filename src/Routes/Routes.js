import React from "react"
import {Switch, Route} from "react-router-dom"

import Catalogo from "../Pages/Catalogo"
import Login from "../Pages/Login"

export default function Routes(){

    return(
        <div>
            <Switch>
                <Route exact path="/" component={Catalogo}/>
                <Route path="/Login" component={Login}/>
            </Switch>
        </div>
            
            
    )

}