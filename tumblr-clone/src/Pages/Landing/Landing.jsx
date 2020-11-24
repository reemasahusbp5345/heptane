import React, { Component } from 'react'
import styled from 'styled-components'
import {HomeNav} from './HomeNav'
import {FooterLinks} from './FooterLinks'
import {Button} from '../../Component/LandingPageComponents/Button'
import {Link} from 'react-router-dom'



export class Landing extends Component {
    render() {
        const {url} = this.props
        const LandingWrap = styled.div`
        height:100vh;
        max-height:100%;
        width:100vw;
        background: url(${url});
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

        .mid div{
            margin-bottom:15px;
        }

        & .mid p{
            white-space: pre-line;
            margin-top:5px;
            margin-bottom:5px;
        }

        & .bottom{
            width:100%;
            height:14%;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
        }


        & button.bottomBtn{
            width:100%;
            border:none;
            outline:none;
            min-height:50%;
            background-color:#00CF35;
            border-top:3px solid #03ae2d;    
            color:white;
            font-weight:bold;
            font-size:1rem;
            letter-spacing:0.25px;
            cursor: pointer;
        }
        `
        return (
            <LandingWrap className="first">
                <HomeNav/>
                <div className="mid">
                    <img src={process.env.PUBLIC_URL + '/tumblr.png'} alt=""/>
                    <p>Come for what you love. {'\n'}
                    Stay for what you discover.</p>
                    <Button bgColor="#00B8FF" color="#fff" label="Get Started" />
                    <Button label="Log in" />
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
            </LandingWrap>
        )
    }
}
