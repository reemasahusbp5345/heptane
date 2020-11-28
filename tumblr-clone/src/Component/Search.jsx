import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.div`
    width:480px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#3f51b5;
    border-radius:3px;
    height:35px;
    background:#fff;
    

    
    
    & svg{
        margin:0 10px;
    }
    
    & input{
        width:450px;
        border-radius:3px;
        height:35px;
        border:none;
        color: #444;
        font-weight:bold;
        outline:none;
    }
`

export class Search extends React.Component {
    render() {
        const { placeholder, type } = this.props
        return (
            <SearchInput>
                <svg width="18" height="18" viewBox="0 0 14 14" fill="#24282b">
                    <path d="M1.676 5.7c0-2.2 1.873-4 4.042-4 2.268 0 4.043 1.8 4.043 4s-1.775 4-4.043 4c-2.169 0-4.042-1.8-4.042-4zm11.732 6.4L10.352 9c.69-.9 1.085-2.1 1.085-3.3 0-3.1-2.564-5.7-5.719-5.7C2.563 0 0 2.6 0 5.7s2.563 5.7 5.718 5.7c1.085 0 2.17-.4 3.057-.9l3.253 3.2c.197.2.493.3.789.3.296 0 .591-.1.789-.3.197-.2.394-.5.394-.8 0-.3-.296-.5-.592-.8z">
                </path>
                </svg>
                <input placeholder={placeholder} type={type}/>
            </SearchInput>
        )
    }
}
