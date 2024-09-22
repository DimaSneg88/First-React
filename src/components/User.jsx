import React from "react";

export default function User({ user }) {
  console.log(user);
  return (
    <div>
      <h2 className="user__name">{user.name}</h2>
      <h3 className="user__age">{user.age}</h3>
      <h4>{5 + 5}</h4>
    </div>
  );
}
