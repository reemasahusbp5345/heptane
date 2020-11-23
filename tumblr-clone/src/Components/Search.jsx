import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.div`
    width:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#3f51b5;
    border-radius:3px;
    
    
    & svg{
        padding:0 5px;
    }
    
    & input{
        width:50%;
        border-radius:3px;
        height:30px;
        border:none;
        color: #444;
        font-weight:bold;
        outline:none;
    }
`

export class Search extends React.Component {
    render() {
        return (
            <SearchInput>
                <svg style={{width:"13px",height:"24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
                <input placeholder="Search" type="text"/>
            </SearchInput>
        )
    }
}
