import React, { Component } from 'react'
import styled from 'styled-components'

const Modal = styled.div`
    height:100vh;
    width:100vw;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0, 25, 53,0.8);
    z-index:999;
`


export  class CreatePost extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {handleModal} = this.props
        return (
            <Modal >
                {this.props.children}
            </Modal>
        )
    }
}
