import React from "react";

const All = {
  width: "300px",
  height: "auto",
  color: "#7c8997",
  fontWeight: "600",
  backgroundColor: "#0d253f",
  margin: "10px",
  marginTop: "0px",
  padding: "10px",
};

const Content = {
  width: "300px",
  height: "auto",
  color: "white",
  fontSize: "12px",
  backgroundColor: "#0d253f",
  margin: "10px",
  padding: "10px",
  textAlign: "center",
};

const AllMessages = () => {
  return (
    <div>
      <div style={{ ...All }}>All messages</div>
      <div style={{ ...Content }}>
        Your Inbox is an aggregate view of Messages (Questions, Fan Mail,
        Submissions) that any of your blogs receive.
      </div>
    </div>
  );
};

export { AllMessages };
