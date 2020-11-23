import React from 'react'
import styled from 'styled-components'


export const Button = props => {
    const { color="#444", bgColor="#fff", label="submit" } = props
    const ButtonWrap = styled.div`
        & button{
            width:230px;
            height:45px;
            border: none;
            outline:none;
            background-color: ${bgColor};
            color: ${color};
            font-size:1rem;
            font-weight:bold;
            letter-spacing:0.25px;
            cursor:pointer;
        }
    `
    return (
        <ButtonWrap>
            <button>{props.label}</button>
        </ButtonWrap>
    )
}
