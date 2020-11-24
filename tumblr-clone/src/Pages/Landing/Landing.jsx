import React, { Component } from 'react'
import styled from 'styled-components'
import {HomeNav} from './HomeNav'
import {FooterLinks} from './FooterLinks'



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

                </div>
                <div className="bottom">
                    <FooterLinks />
                    <button onClick={{}} className="bottomBtn">What is Tumblr?</button>
                </div>
            </LandingWrap>
        )
    }
}
