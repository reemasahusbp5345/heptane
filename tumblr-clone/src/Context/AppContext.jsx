import React, { Component } from 'react'
 
import axios from 'axios'
import { Redirect } from "react-router-dom";


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
            isAuth,addPost,
 
            email:"",
            password:"",
            isPageLoading: false,
            data:[], //
            currentUser:false 

        }

        //binding
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.redirectTo = this.redirectTo.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.saveData = this.saveData.bind(this)
        this.checkData = this.checkData.bind(this)
    }
    
    // handling changes inside inputs
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // handling onSubmit logic of form
// handling changes inside inputs
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // handling onSubmit logic of form
// handling changes inside inputs
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // handling onSubmit logic of form
    async handleSubmit(e){
        e.preventDefault()

        this.setState({
            isPageLoading: true
        })
        await axios.get('https://tumblr-server.herokuapp.com/users')
        .then(res => this.saveData(res.data) )
        .catch(err => console.log(err))
    }

    saveData(data){
        console.log(data)

        // checking if email is present in database 
        // if it exists then we will check if pasword is corect 
        let user = data.find( user => user.email === this.state.email && user.password === this.state.password )
        
        if( user !== undefined ){
            this.setState({
                currentUser: user.id,
                isAuth:true
            })
        }
        
    }

    
    // function to redirect
    redirectTo(history, path){
        history.push(path)
    }


    async handleSignUp(e, email, username, password, history){
        e.preventDefault()

        this.setState({
            isPageLoading: true
        })

        await axios.get('https://tumblr-server.herokuapp.com/users')
        .then(res => this.checkData(res.data, email, username, password, history) )
        .catch(err => console.log(err))

    }

    async checkData(data, email, username, password, history){
        // checking if email is present in database 
        // if it exists then we will check if username exists 
        let user = data.filter( item => item.username === username || email === item.email  )
        
        if( user.length === 0 ){
            await axios({
                method: 'post',
                url: 'https://tumblr-server.herokuapp.com/users',
                data: {
                    "email": email,
                    "username": username,
                    "password": password
                }
              })
            .then( res => {
                this.setState({
                    currentUser : res.data.id,
                    isAuth:true
                })   
                // history.push("/dashboard")   
            })
            .catch( err =>
                console.log(err)
            )
        }
        
    }

    
    render() {
        const { isAuth, email, password, currentUser, data } = this.state
        const { handleChange, handleSubmit, redirectTo, handleSignUp } = this
        const value ={
            isAuth,
            handleChange,
            handleSubmit,
            email,
            password,
            currentUser,
            redirectTo, 
            handleSignUp
        }
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
