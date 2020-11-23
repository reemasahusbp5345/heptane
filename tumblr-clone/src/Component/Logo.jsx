import React from 'react'
import styled from 'styled-components'

const LogoWrap = styled.div`
    & img{
        width: 35px;
        height: 60px;
    }

    & img:hover{
        fill:blue;
    }
`

export const Logo = () => {
    return (
        <LogoWrap>
            <img src="https://svgshare.com/i/Rgd.svg" alt=""/>
        </LogoWrap>
    )
}
