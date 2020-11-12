import React from 'react'
import { LoginComponent } from '../components/auth/LoginComponent'
import { RegisterComponent } from '../components/auth/RegisterComponent';
import { Redirect, Route, Switch } from 'react-router-dom'; 

export const AuthRoutes = () => {
    return (
        <div>
            
            <Switch>
                <Route exact path="/auth/login" component={ LoginComponent }/>
                <Route exact path="/auth/register" component={ RegisterComponent }  />

                <Redirect to="/auth/login"/>
            </Switch>

        </div>
    )
}
