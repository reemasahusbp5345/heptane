import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AppContext} from '../../Context/AppContext'

export class PrivateRoute extends React.Component {
    render(){
        const {Component, ...rest} = this.props
        const { currentUser } = this.context
        return !currentUser ? <Redirect to="/login" /> : <Route {...rest} render={ props => <Component {...props} /> } />
    }
}

PrivateRoute.contextType = AppContext