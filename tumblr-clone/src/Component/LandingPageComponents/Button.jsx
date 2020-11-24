import React from 'react'
import styled from 'styled-components'


    const ButtonWrap = styled.div`
        & button{
            width:300px;
            height:45px;
            border: none;
            outline:none;
            background-color: #fff;
            color: #444;
            font-size:1rem;
            font-weight:bold;
            letter-spacing:0.25px;
            cursor:pointer;
        }
    `
export const Button = props => {
    const { color="#444", bgColor="#fff", label="submit" } = props
    return (
        <ButtonWrap>
            <button>{props.label}</button>
        </ButtonWrap>
    )
}
