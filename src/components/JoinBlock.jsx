import React from "react";
// import socket from "./components/socket";
const JoinBlock = () => {
  return (
    <>
      <div className="input_room">
        <input className="input" type="text" placeholder="Room ID" />
        <input className="input" type="text" placeholder="Your Name" />
        <button className="btn">Войти</button>
      </div>
    </>
  );
};

export default JoinBlock;
