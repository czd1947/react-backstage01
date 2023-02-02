import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Login from "./pages/login/login"
import Forget from "./pages/users/forget"
import Admin from "./pages/admin/admin"

export default function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/forget" component={Forget}/>
                <Route path="/admin" component={Admin}/>
            </Switch>
        </BrowserRouter>
    )
}
