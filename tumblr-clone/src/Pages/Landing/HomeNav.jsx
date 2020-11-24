import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../Component/Logo'
import {Search} from '../../Component/Search'
import {SmallButtons} from '../../Component/LandingPageComponents/SmallButtons'

export const HomeNav = () => {
    const NavWrap = styled.nav`
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:transparent;

        & .left{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }

        & .left img{
            margin: 0 10px;
            cursor: pointer;
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
    return (
        <NavWrap>
            <div className="left">
                <Logo /> 
                <Search type="text" placeholder="Search Tumblr" /> 
            </div>
            <div className="right">
                <SmallButtons color="#fff" bgColor="#000" label="Log in" />
                <SmallButtons color="#222" bgColor="#fff" label="Sign up" />
            </div>
        </NavWrap>
    )
}
