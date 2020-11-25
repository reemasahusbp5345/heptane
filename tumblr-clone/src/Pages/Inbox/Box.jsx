import React from "react";
import Icon from "@mdi/react";
import { mdiEmailOff } from "@mdi/js";

const BoxWrap = {
  backgroundColor: "#0d253f",
  height: "300px",
  width: "400px",
  textAlign: "center",
};

const BoxIcon = {
  marginTop: "70px",
};

const BoxText = {
  color: "#7c8997",
  fontSize: "20px",
  fontWeight: "700",
};

export const Box = () => {
  return (
    <div style={{ ...BoxWrap }}>
      <Icon
        path={mdiEmailOff}
        title="Inbox"
        size={5}
        color="#7c8997"
        style={{ ...BoxIcon }}
      />
      <div style={{ ...BoxText }}>No messages to display.</div>
    </div>
  );
};
