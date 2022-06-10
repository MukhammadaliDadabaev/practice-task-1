import React from "react";

const Image = ({ id, url, name, info, email }) => {
  return (
    <div className="bg-blue br3 dib pb2 ma3 grow shadow-5 w-20">
      <img className="br2 dim" src={url} alt="photos" />
      <div className="tc white">
        <h1>{name}</h1>
        <p>{info}</p>
        <a href="!#">{email}</a>
      </div>
    </div>
  );
};
export default Image;
//outline w-25 pa3 mr2
