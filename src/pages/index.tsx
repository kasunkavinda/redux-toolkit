import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Profile from "../components/profile/Profile";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  );
};

export default Home;
