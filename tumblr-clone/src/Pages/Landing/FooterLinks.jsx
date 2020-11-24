import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:white;
    font-weight:bold;
    
    & div:first-child a{
        text-decoration: none;
        color:white;
        padding-right:20px
    }
`

export const FooterLinks = () => {
    return (
        <Wrapper>
            <div>
                <Link to="/terms" >Terms</Link>
                <Link to="/privacy" >Privacy</Link>
                <Link to="/jobs" >Jobs</Link>
                <Link to="/support" >Support</Link>
            </div>
            <div>
                Posted by ThatGuy
            </div>
        </Wrapper>
    )
}
