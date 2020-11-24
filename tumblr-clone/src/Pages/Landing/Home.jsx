<<<<<<< HEAD
import React, { Component } from "react";
import { Landing } from "./Landing";
// import ScrollableContainer from "react-full-page-scroll";
=======
import React, { Component } from 'react'
import {Landing} from './Landing'
 
import {Login} from '../Login/Login'
import {ScrollSection, ScrollContainer} from 'react-onepage-scroll'
import styled from 'styled-components'
>>>>>>> a2ac30a36b709f1c32c63c46818170f7d2cd77a0

        const Wrap = styled.div`
            
        `
export class Home extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div>
        <Landing
          url={
            "https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png"
          }
        />
        <Landing
          url={
            "https://64.media.tumblr.com/083ad6da992f9759181ef2f350f02e46/5258822eb725ae61-2a/s1280x1920/df2f3312642dbbb0995721e090422b22aa1d2c9a.jpg"
          }
        />
      </div>
    );
  }
=======
    render() {
        return (
            <Wrap>
                <ScrollContainer>

                    <ScrollSection pageId={0}>
                        <Login url={'https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png'}/>
                    </ScrollSection>
                    <ScrollSection pageId={1}>
                        <Landing url={'https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png'}/>
                    </ScrollSection>
                    <ScrollSection pageId={2}>
                        <Landing url={'https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png'}/>
                    </ScrollSection>

                    <ScrollSection pageId={3}>
                        <Landing url={'https://64.media.tumblr.com/083ad6da992f9759181ef2f350f02e46/5258822eb725ae61-2a/s1280x1920/df2f3312642dbbb0995721e090422b22aa1d2c9a.jpg'} />
                    </ScrollSection>

                </ScrollContainer>
            </Wrap>
        )
    }
>>>>>>> a2ac30a36b709f1c32c63c46818170f7d2cd77a0
}
