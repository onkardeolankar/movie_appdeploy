import React from "react";
import { Counter } from "./Counter";

function UserList() {
  const users = [
    {
      name: "Darshan",
      pic: "https://source.unsplash.com/150x150/?hacker",
    },
    {
      name: "Niharika",
      pic: "https://source.unsplash.com/150x150/?beautiful,girl",
    },
    {
      name: "Aftab",
      pic: "https://source.unsplash.com/150x150/?boy",
    },
  ];

  return (
    <div>
      {users.map((usr) => (
        <Hello name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}
function Hello(props) {
  return (
    <div className="container">
      <img className="profile-pic" src={props.pic} alt={props.name}></img>
      <h1>{props.name}✌️✌️✌️</h1>
      <Counter />
    </div>
  );
}
