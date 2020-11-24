import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../Component/Logo'
import {Search} from '../../Component/Search'
import {SmallButtons} from '../../Component/LandingPageComponents/SmallButtons'

    const NavWrap = styled.nav`
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:transparent;
        padding-top:10px;

        & .left{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }

        & .left img{
            margin: 0 10px;
            cursor: pointer;
        }

        .left svg{
            margin: 0 10px;
        }

        .left div:last-child{
            width:480px;
        }

        & .left input{
            width: 100%;
        }
        

        & .right{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }

        & .right button:nth-child(1){
            margin: 0 30px 0 10px;
             
        }
    `
export const HomeNav = props => {
    
    return (
        <NavWrap>
            <div className="left">
                <Logo /> 
                <Search type="text" placeholder="Search Tumblr" /> 
            </div>
            <div className="right">
                { props.login && <SmallButtons path="/login" color="#fff" bgColor="#000" label="Log in" />}
                { props.signup && <SmallButtons path="/signup" color="#222" bgColor="#fff" label="Sign up" />}
            </div>
        </NavWrap>
    )
}
