import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

    const SmallButtonsWrap = styled.div`
        & a{
            width:60px;
            height:32px;
            border: none;
            outline:none;
            background-color: rgba(0,0,0,0.1);
            color: #fff;
            font-size:0.8rem;
            font-weight:bold;
            letter-spacing:0.3px;
            cursor:pointer;
            border-radius:2px;
        }
    `

export const SmallButtons = props => {
    const { label="submit", path } = props
    return (
        <SmallButtonsWrap>
            <Link to={path}>{label}</Link>
        </SmallButtonsWrap>
    )
}
