import React from 'react'
import styled from 'styled-components'


export const Input = props => {
    const { color="#222", bgColor="#fff",  type="text", placeholder } = props
    const InputWrap = styled.div`
        & input{
            width:230px;
            height:45px;
            border: none;
            outline:none;
            background-color: ${bgColor};
            color: ${color};
            font-size:1rem;
            font-weight:bold;
            letter-spacing:0.25px;
        }
    `
    return (
        <InputWrap>
            <input placeholder={placeholder} type={type}/>
        </InputWrap>
    )
}
