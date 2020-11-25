import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";
// import { Layout } from "antd";
import { HeadCard } from "../../Component/HeadCard";
import { PostCard } from "../../Component/PostCard";
import {RecommendedBlogs} from "../../Component/RecommendedBlogs"
import {Radar} from "../../Component/Radar"
import styled from "styled-components";
import { AppContext } from "../../Context/AppContext";
const Layout=styled.div`
  display:flex;
  background:#001935;
`;
const Content=styled.div`
  flex:2;
`;
const Sider=styled.div`
  flex:1;
`;
// const {Sider, Content } = Layout;
export class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
     
  }
   
  render(){
    
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
        </Layout>
      </div>
    );
  }
};
Dashboard.contextType=AppContext