import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const message = useSelector((state) => state.message);
  console.log("message", message);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  if (!message) {
    return null;
  }

  return <div style={style}>{message}</div>;
};

export default Notification;