import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { HeadCard } from "../../Component/HeadCard";
import { PostCard } from "../../Component/PostCard";
import {RecommendedBlogs} from "../../Component/RecommendedBlogs"
import {Radar} from "../../Component/Radar"

const {Sider, Content } = Layout;

export const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Content>
          <HeadCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Content>
        <Sider>
          <RecommendedBlogs/>
          <Radar/>
          </Sider>
      </Layout>
    </div>
  );
};
