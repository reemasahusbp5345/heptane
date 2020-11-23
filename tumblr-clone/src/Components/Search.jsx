import React from 'react'
import styled from 'styled-components'
import MagnigyIcon from 'mdi-react/MagnigyIcon'

const SearchInput = styled.div`
    max-width:480px;
`

export const Search = props => {

    return (
        <SearchInput>
            <MagnigyIcon />
            <input placeholder={props.placeholder} type="text"/>
        </SearchInput>
    )
}
