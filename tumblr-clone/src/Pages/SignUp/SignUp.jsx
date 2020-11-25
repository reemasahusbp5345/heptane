import React, { Component } from 'react'
import styled from 'styled-components'
import {HomeNav} from '../Landing/HomeNav'
import {FooterLinks} from '../Landing/FooterLinks'
import {Button} from '../../Component/LandingPageComponents/Button'
import {Link} from 'react-router-dom'
import {AppContext} from '../../Context/AppContext'
import {Input} from '../../Component/LandingPageComponents/Input'


    const SignUpWrap = styled.div`
        height:100vh;
        max-height:100%;
        width:100vw;
        background:url('https://64.media.tumblr.com/534c436062bdc2b8b7e088a681bef2f3/a37720b8a01f2f44-c6/s1280x1920/8a51265ba48d50a25d98890b693ddc20d749de26.jpg');
        background:url('https://64.media.tumblr.com/534c436062bdc2b8b7e088a681bef2f3/a37720b8a01f2f44-c6/s1280x1920/8a51265ba48d50a25d98890b693ddc20d749de26.jpg');
        display:flex;
        flex-direction:column;
        justify-content:space-between;

        & .mid img{
            width:200px;
        }

        & .mid{
            color: white;
            font-weight: bold;
            display:flex;
            flex-direction:column;
            align-items:center;
        }

        & form input{
            padding-left: 10px;
        }

        & .mid p{
            white-space: pre-line;
            margin-top:5px;
            margin-bottom:15px;
            font-size:1rem;
        }

        & .bottom{
            width:100%;
            height:14%;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
        }

        & form button{
            color:white;
            background-color:rgb(0, 184, 255);
            margin-top:20px;
            margin-bottom:20px;
        }
    `  

export class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            email:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { handleSignUp, currentUser, redirectTo } = this.context
        const {email, password, username} = this.state
        return (
            <div>
                
                { !currentUser ? <SignUpWrap>
                    <HomeNav/>
                    <div className="mid">
                        <img src={process.env.PUBLIC_URL + '/tumblr.png'} alt=""/>
                        <p>Come for what you love. {'\n'}
                        Stay for what you discover.</p>
                        <form onSubmit={ e => handleSignUp( e, email, username, password )}>
                            <Input handleChange={ e => this.handleChange(e) } value={email} name="email" type="email" placeholder="Enter Email" />
                            <Input handleChange={ e => this.handleChange(e) } value={username} name="username" type="text" placeholder="Enter Username" />
                            <Input handleChange={ e => this.handleChange(e) } value={password} name="password" type="password" placeholder="Enter Password" />
                            <Button label="Sign Up" />
                        </form>
                        <Link style={{color:"white"}} to="/explore">
                            <div style={{display:"flex", alignItems:"center"}}>
                                <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z" />
                                </svg>
                                <p style={{marginLeft:"5px"}}>
                                    Here's What's trending
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="bottom">
                        <FooterLinks />
                    </div>
                </SignUpWrap> : <Redirect to="/dashboard" />}
            </div>

        )
    }
}

SignUp.contextType = AppContext