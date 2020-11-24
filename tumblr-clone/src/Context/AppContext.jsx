import React, { Component } from 'react'

export const AppContext = React.createContext() 

export class AppContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuth:false
        }
    }
    render() {
        const { isAuth } = this.state
        const value ={
            isAuth
        }
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
