import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoutes = ({isAuthenticated,component: Component, ...rest}) => {

    const {location: {pathname, search}} = rest

    localStorage.setItem('lastPath',pathname+search)
    return (
        <Route {...rest} component={ (props) => (
            (isAuthenticated) ? (<Component {...props}/>) : (<Redirect to='/login' />)
        )

        } />            
    )
}

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}