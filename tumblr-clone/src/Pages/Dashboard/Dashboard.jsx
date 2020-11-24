import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { HeadCard } from "../../Components/HeadCard";
import { PostCard } from "../../Components/PostCard";
import {RecommendedBlogs} from "../../Components/RecommendedBlogs"
import {Radar} from "../../Components/Radar"

const { Header, Sider, Content } = Layout;

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
