import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";
// import { Layout } from "antd";
import { HeadCard } from "../../Component/HeadCard";
import { PostCard } from "../../Component/PostCard";
<<<<<<< HEAD
import { RecommendedBlogs } from "../../Component/RecommendedBlogs";
import { Radar } from "../../Component/Radar";
// import { AppContext } from "../../Context/AppContext";
const { Header, Sider, Content } = Layout;
import { AppContext } from "../../Context/AppContext";
// import App from "../../App";

export class Dashboard extends React.Component {
  render() {
    // const { data, isLoading } = this.context;
    // console.log(data[0].username);
    return (
      <div>
        <Layout style={{ display: "flex", flexDirection: "row" }}>
          <Content>
            <HeadCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Content>
          <Sider>
            <RecommendedBlogs />
            <Radar />
          </Sider>
=======
import {RecommendedBlogs} from "../../Component/RecommendedBlogs"
import {Radar} from "../../Component/Radar"
import styled from "styled-components";
import { AppContext } from "../../Context/AppContext";

const Layout=styled.div`
  display:flex;
  background:#0d47a1;
`;
const Content=styled.div`
  flex:2
`;
const Sider=styled.div`
  flex:1
  
`;

// const {Sider, Content } = Layout;


export class Dashboard extends React.Component {

  constructor(props){
    super(props)
    this.state={

    }
    this.feedCard=this.feedCard.bind(this)
  }
  feedCard(){
  }
  
  render(){
    const {user}=this.context
    console.log(user)

    return (
      <div>
        <Layout>
          <Content  >
            <HeadCard />
            <PostCard />
           <PostCard/>
          </Content>
          <Sider  >
            <RecommendedBlogs/>
            <Radar/>
            </Sider>
>>>>>>> 42a0a394c038e531bb7ebba51c7840fdb35b7da2
        </Layout>
      </div>
    );
  }
<<<<<<< HEAD
}

Dashboard.contextType = AppContext;
=======
};

Dashboard.contextType=AppContext
>>>>>>> 42a0a394c038e531bb7ebba51c7840fdb35b7da2
