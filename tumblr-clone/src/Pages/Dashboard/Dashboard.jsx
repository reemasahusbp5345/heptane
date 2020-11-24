import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { HeadCard } from "../../Component/HeadCard";
import { PostCard } from "../../Component/PostCard";
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
        </Layout>
      </div>
    );
  }
}

Dashboard.contextType = AppContext;
