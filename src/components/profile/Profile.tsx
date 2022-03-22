import React from "react";
import type { NextPage } from "next";
import { useSelector } from "react-redux";

const Profile: NextPage = () => {
  const user = useSelector((state: any) => state.user.value);
  return (
    <div>
      <h1>profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
