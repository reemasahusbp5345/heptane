import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiFormatTextVariantOutline,
  mdiCamera,
  mdiFormatQuoteOpen,
  mdiLinkVariant,
  mdiWechat,
  mdiHeadphones,
  mdiVideoVintage,
} from "@mdi/js";
import {Link} from "react-router-dom"
 import {Modal} from "antd"
 import {PhotoPost} from "../Component/PostFolder/PhotoPost"
import { AppContext } from "../Context/AppContext";
import { CreatePost } from "../Component/Modal/CreatePost";

const CardWrapper = styled.div`
  height: 95px;
  width: 500px;
  padding: 5px;
  margin: 5px 30%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

const AvatarBox = styled.div`
height: 70px;
width: 70px;
margin: 7px;

& img {
  height: 70px;
  border-radius:5px;
    width: 70px;
  }
`;

const PostBox = styled.div`
  
  border-radius:5px;
  background:#f5f5f5;
  margin-top: 7px;
  padding-top: 5px;
  height: 90px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

class HeadCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      modal2Visible: false,
      modal3Visible: false,
      modal4Visible: false,
      modal5Visible: false,
      modal6Visible: false,
      modal7Visible: false,
     text:"",
     open:false,
    };
    this.handleChange=this.handleChange.bind(this)
    this.photo=React.createRef()
    this.togglePhoto=this.togglePhoto.bind(this)
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
    const {addPost}=this.context
    const {text} = this.state;
    let payload={text}
    addPost(text)
    // console.log(text)
  }

  togglePhoto(){
    const {open}=this.state
    this.setState({
      open:!open
    })
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  setModal3Visible(modal3Visible) {
    this.setState({ modal3Visible });
  }
  setModal4Visible(modal4Visible) {
    this.setState({ modal4Visible });
  }
  setModal5Visible(modal5Visible) {
    this.setState({ modal5Visible });
  }
  setModal6Visible(modal6Visible) {
    this.setState({ modal6Visible });
  }
  setModal7Visible(modal7Visible) {
    this.setState({ modal7Visible });
  }

  handleChange(e){
      const {name, value}=e.target
      this.setState({
        [name]:value
      } )
  }
  render(){
        const {text,open}=this.state
        
    return (
      <CardWrapper>
        <AvatarBox>
          <img src="https://assets.tumblr.com/images/default_avatar/sphere_open_64.png" alt="avatar" />
        </AvatarBox>
        <PostBox>
          <div>
            <Icon path={mdiFormatTextVariantOutline} title="share" size={2} onClick={() => this.setModal1Visible(true)}/>
            <p>Text</p>
            <Modal
                title="Title"
                style={{ top: "20" }}
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}

                onCancel={() => this.setModal1Visible(false)}
              >
                <input type="text" placeholder="Your text here" name="text" value={text} onChange={this.handleChange}/>
                <p>Your Text Here</p>
                <p>some contents...</p>
              </Modal>
          </div>
          <div  >
            <Icon path={mdiCamera} title="share" size={2} onClick={this.togglePhoto}  style={{color:"orangered"}}/>
            <p>Photo</p>
           { open?<CreatePost handleModal={this.togglePhoto}/>:null}
          </div>
          <div>
            <Icon path={mdiFormatQuoteOpen} title="share" size={2} onClick={() => this.setModal3Visible(true)} style={{color:"orange"}}/>
            <p>Quote</p>
            <Modal
                title="Quote"
                style={{ top: 20 }}
                visible={this.state.modal3Visible}
                onOk={() => this.setModal3Visible(false)}
                onCancel={() => this.setModal3Visible(false)}
              >
                
                <p>some contents...</p>
                <p>--Source</p>
              </Modal>
          </div>
          <div>
            <Icon path={mdiLinkVariant} title="share" size={2} onClick={() => this.setModal4Visible(true)} style={{color:"green"}}/>
            <p>Link</p>
            <Modal
                title="Link"
                style={{ top: 20 }}
                visible={this.state.modal4Visible}
                onOk={() => this.setModal4Visible(false)}
                onCancel={() => this.setModal4Visible(false)}
              >
                
                <p>Link</p>
                <p>some contents...</p>
              </Modal>
          </div>
          <div>
            <Icon path={mdiWechat} title="share" size={2} onClick={() => this.setModal5Visible(true)} style={{color:"blue"}}/>
            <p>Chat</p>
            <Modal
                title="We Chat"
                style={{ top: 20 }}
                visible={this.state.modal5Visible}
                onOk={() => this.setModal5Visible(false)}
                onCancel={() => this.setModal5Visible(false)}
              >
                
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
          </div>
          <div>
            <Icon path={mdiHeadphones} title="share" size={2} onClick={() => this.setModal6Visible(true)} style={{color:"purple"}}/>
            <p>Audio</p>
            <Modal
                title="Audio"
                style={{ top: 20 }}
                visible={this.state.modal6Visible}
                onOk={() => this.setModal6Visible(false)}
                onCancel={() => this.setModal6Visible(false)}
              >
                
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
          </div>
          <div>
            <Icon path={mdiVideoVintage} title="share" size={2} onClick={() => this.setModal7Visible(true)} style={{color:"pink"}}/>
            <p>Video</p>
            <Modal
                title="Video"
                style={{ top: 20 }}
                visible={this.state.modal7Visible}
                onOk={() => this.setModal7Visible(false)}
                onCancel={() => this.setModal7Visible(false)}
              >
                <p> <PhotoPost/> </p>
                
                <p>some contents...</p>
              </Modal>
          </div>
        </PostBox>
      </CardWrapper>
    );
  }
};

HeadCard.contextType=AppContext

export { HeadCard };
