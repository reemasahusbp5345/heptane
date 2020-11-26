import React, { Component } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../Context/AppContext'
import CogIcon from 'mdi-react/CogIcon'
 

const Container = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    background-color:white;
    width:540px;
    height:300px;
    transform:translate(-50%,-50%);
    z-index:1000;
    border-radius:5px;
    /* opacity:1; */
    
`
const Header = styled.div`
    /* font-size:20px; */
    display:flex;
    /* line-height:1; */
    font-weight:500;
    color:rgba(0,0,0,.9);
    justify-content:space-between;
    align-items: center;
    padding: 0 20px;
    height: 40px;

    & p{
        font-weight:500;
        padding-top:10px;
    }

`
const Body = styled.div`
    display:flex;
    flex-direction:column;
    height: 200px;
    border-bottom: 2px dashed #888;
    border-top: 2px dashed #888;

    & input{
        height: 180px;
        outline:none;
        border:none;
        padding-left:20px;
        font-style:italic;
        font-weight:500;
    }
`

const Footer = styled.div`
    display:flex;
    height: 60px;
    justify-content:space-between;
    padding:1rem 2rem;
`
const Button1 = styled.button`
    width:60px;
    height:32px;
    border: none;
    outline:none;
    background-color: rgba(0,0,0,0.1);
    color: #fff;
    font-size:0.8rem;
    font-weight:bold;
    letter-spacing:0.3px;
    cursor:pointer;
    border-radius:2px;
`
const Button2 = styled.button`
    width:60px;
    height:32px;
    border: none;
    outline:none;
    background-color: rgb(0, 184, 255);
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.3px;
    cursor: pointer;
    border-radius:2px;
`

// const Close = styled.div`
//     border-radius:100%;
//     cursor:pointer;
//     padding:5px;

//     & :hover{
//         background-color:#bfbfbf;
//     };
// `;
export class PhotoCard extends Component {

    constructor(props){
        super(props)
        this.state={
            post:"",
            img:""
        }
        this.handlePost = this.handlePost.bind(this)
    }

handleChange=(e)=>{
    const {name,value} = e.target
    this.setState({
        [name]: value
    })
}

handlePost(e){
    const {post,img} =  this.state
    const {handleModal} = this.props
    const {addPhoto} = this.context
    //  console.log(img)
    addPhoto( post,img )
    {handleModal(e)}

}

 

    render() {
        const {handleModal} = this.props
        const {post,img} = this.state
        const {activeUser} = this.context
        return (
            <Container>
                <Header >
                    <p>{activeUser.username}</p>
                    <CogIcon />
                </Header>
                <Body>
                    <input name="img" value={img}  placeholder="Paste a URL" onChange={(e)=>this.handleChange(e)} type="text" />
                </Body>
                <Footer>

                    <Button1 onClick={handleModal} >Close</Button1>
                    <Button2 onClick={this.handlePost}  disabled={post.length===0 && img===""?true:false} >Post</Button2>
                </Footer>
                
            </Container>
        )
    }
}

PhotoCard.contextType = AppContext