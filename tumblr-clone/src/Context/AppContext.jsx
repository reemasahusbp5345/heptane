import { mdiAxisXRotateClockwise } from '@mdi/js'
import React, { Component } from 'react'
 
import axios from 'axios'
import { ConsoleSqlOutlined } from '@ant-design/icons'
 

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
            data:[],
            currentUser:""

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    async handleSubmit(e){
        e.preventDefault()
        const {data} = this.state
        this.setState({
            isPageLoading: true
        })
        await axios.get('https://tumblr-server.herokuapp.com/users')
        .then(res => this.setState({
            data: res.data
        }))
        .catch(err => Console.log(err))

        let user = data.find( user => user.email === this.state.email )
        
        if( user !== undefined ){
            this.setState({
                currentUser: user.id
            })
        }
        else{
            this.setState({
                currentUser: null
            })
        }
    }

   
    
    render() {
        const { isAuth, email, password } = this.state
        const { handleChange, handleSubmit } = this
        const value ={
            isAuth,
            handleChange,
            handleSubmit,
            email,
            password
 
        }
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
