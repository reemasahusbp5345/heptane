import React, { Component } from 'react'
import styled from 'styled-components'

        const InputWrap = styled.div`
        & input{
            width:300px;
            height:45px;
            border: none;
            outline:none;
            background-color: white;
            color: #444;
            font-size:0.9rem;
            font-weight:500;
            font-style:italic;
            letter-spacing:0.25px;
        }
        `
export class Input extends Component {
    render() {

        const { type="text", placeholder, value, handleChange, name } = this.props


        return (
            <InputWrap>
                <input name={name} value={value} onChange={ e => handleChange(e) } placeholder={placeholder} type={type}/>
            </InputWrap>
        )
    }
}