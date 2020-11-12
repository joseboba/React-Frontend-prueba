import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({ isAuthenticated, component: Component, ...rest }) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                (!isAuthenticated)
                    ? (<Component {...props}/>)
                    : (<Redirect to="/"/>)
            )}

        />
    )

}

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
