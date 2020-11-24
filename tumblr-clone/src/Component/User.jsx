import React, { useState } from 'react';
 
import 'antd/dist/antd.css';
 
import { Drawer, Button } from 'antd';
import {UserOutlined} from "@ant-design/icons"

const User = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
     <UserOutlined onClick={showDrawer} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

 export {User}