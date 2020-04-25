import React from "react";

export default function Title(props) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="">
          {props.name} <strong className="">{props.title}</strong>
        </h1>
      </div>
    </div>
  );
}
