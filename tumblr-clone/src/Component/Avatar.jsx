import React from 'react'
import styled from 'styled-components'

    const Div = styled.div`
        border-radius: 3px;
        min-height: 70px;
        min-width: 70px;
        margin-left:6px;
        margin-top:6px;
        background: url(${ props => props.bg === 'undefined' ? 'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png' : props.bg });
        background-size:contain;
    `
export const Avatar = props => {
    return (
        <Div bg={props.img}>
        </Div>
    )
}
