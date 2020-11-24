import React, { Component } from 'react'
import styled from 'styled-components'
import {HomeNav} from './HomeNav'


export class Landing extends Component {
    render() {
        const {url} = this.props
        const LandingWrap = styled.div`
        height:100vh;
        max-height:100%;
        width:100vw;
        background: url(${url});
        `
        return (
            <LandingWrap className="first">
                <HomeNav/>
            </LandingWrap>
        )
    }
}
