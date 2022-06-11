import React from "react";

const Image = ({ url, name, info, email }) => {
  return (
    <div className="title bg-blue br3 w-20 pb2 ma3 grow ts">
      <img className="br2 dim" src={url} alt="photos" />
      <div className="tc white">
        <h1 className="">{name}</h1>
        <p>{info}</p>
        <a href="!#">{email}</a>
      </div>
    </div>
  );
};
export default Image;
