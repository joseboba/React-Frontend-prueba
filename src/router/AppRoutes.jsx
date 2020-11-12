import React, { useEffect } from 'react'
import { PublicRoutes } from './PublicRoutes';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthRoutes } from './AuthRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoutes';
import { AllCars } from '../components/car/AllCars';
import { renewToken } from '../actions/authActions';
import { Navbar } from '../components/ui/Navbar';
import { EditUser } from '../components/user/EditUser';
import { CreateCar } from '../components/car/CreateCar';
import { EditPassword } from '../components/user/EditPassword'
import { EditCar } from '../components/car/EditCar'
import { Search } from '../components/ui/Search';


export const AppRoutes = () => {

    const dispatch = useDispatch()
    const { uid } = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(renewToken())
    }, [dispatch])

    


    return (
        <div>
              <Router>

                {
                    (!!uid) &&
                    <Navbar />
                }
                 
                  <Switch>
                    <PublicRoutes  path="/auth"  component={ AuthRoutes } isAuthenticated={ !!uid } />
                    
                    <PrivateRoute  exact path="/"  component={ AllCars } isAuthentiated={ !!uid } />
                    <PrivateRoute  exact path="/user"  component={ EditUser } isAuthentiated={ !!uid } />
                    <PrivateRoute  exact path="/new/car"  component={ CreateCar } isAuthentiated={ !!uid } />
                    <PrivateRoute  exact path="/user/password" component={ EditPassword } isAuthentiated={ !!uid }/>
                    <PrivateRoute  exact path="/car/update" component={ EditCar } isAuthentiated={ !!uid } />
                    <PrivateRoute  exact path="/search" component={ Search } isAuthentiated={ !!uid } />

                    <Redirect to="/auth/login"/>
                  </Switch>

              </Router>
        </div>
    )
}
