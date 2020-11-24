import { mdiAxisXRotateClockwise } from '@mdi/js'
import React, { Component } from 'react'
import axios from "axios"

export const AppContext = React.createContext() 

export class AppContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuth:false,
            posting:false,
            user:[],
        }
        this.addPost=this.addPost.bind(this)
    }

    componentDidMount(){
        
        axios.get(`https://tumblr-server.herokuapp.com/users`)
        .then((res=>{
               this.setState({
                   user:[res.data[0]]
               })
        }))
         
    }

    // addPost(newPost){
    //     const {post}=this.state;
    //     this.setState({
    //         post:[ post,newPost]
    //     })
       
    // }

    render() {
        const { isAuth,user } = this.state
        console.log(user)
        const {addPost}=this
        const value ={
            isAuth,addPost
        }
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
