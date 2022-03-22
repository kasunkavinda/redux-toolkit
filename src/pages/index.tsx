import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Login from "../components/login/Login";
import Logout from "../components/logout/Logout";
import Profile from "../components/profile/Profile";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Login />
      <Logout />
    </div>
  );
};

export default Home;
