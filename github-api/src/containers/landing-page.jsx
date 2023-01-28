import styles from "@/styles/LandingPage.module.css";
import { useState } from "react";
import "animate.css";
import MainText from "@/components/texts/mainText";
import InputText from "@/components/inputs/inputText";
import Profile from "@/components/profiles/profile";
import MainBox from "@/components/boxes/mainBox";
import axios from "axios";

const LandingPageContainer = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleRepo, setToggleRepo] = useState(false);
  const [fakeRepo, setFakeRepo] = useState([]);
  const [realRepo, setRealRepo] = useState([]);
  const [user, setUser] = useState({});
  const [searchUser, setSearchUser] = useState("");
  const [repoData, setRepoData] = useState([
    { repoName: "Todo-App", lastUpdate: "27 Nov 2022" },
    { repoName: "Resto-App", lastUpdate: "03 Jan 2023" },
    { repoName: "Project-3", lastUpdate: "04 Feb 2024" },
    { repoName: "Project-4", lastUpdate: "05 Mar 2025" },
    { repoName: "Project-5", lastUpdate: "06 Apr 2026" },
    { repoName: "Project-6", lastUpdate: "07 Mei 2027" },
    { repoName: "Project-7", lastUpdate: "08 Jun 2028" },
    { repoName: "Project-8", lastUpdate: "09 Jul 2029" },
  ]);
  const toggleText = () => {
    setToggle(!toggle);
  };
  const toggleRepoHandler = async () => {
    setToggleRepo(true);
    const { data: repo } = await axios.get(
      `https://api.github.com/users/${searchUser}/repos?sort=updated`
    );

    const { data: user } = await axios.get(
      `https://api.github.com/users/${searchUser}`
    );
    setRealRepo(repo);
    setUser(user);
  };
  const closeRepo = () => {
    setToggleRepo(false);
    setRealRepo([]);
    setUser({});
  };
  const changeSearchUser = (e) => {
    setSearchUser(e.target.value);
  };
  let text = <MainText toggleText={toggleText} textStyle={"text"} />;
  let input = "";
  if (toggle) {
    text = (
      <MainText
        toggleText={toggleText}
        textStyle={"textClicked"}
        searchUser={searchUser}
      />
    );

    input = (
      <InputText
        toggle={toggleRepoHandler}
        changeSearchUser={changeSearchUser}
      />
    );
  } else {
    text = <MainText toggleText={toggleText} textStyle={"text"} />;
  }
  return (
    <>
      <div className={styles.container}>
        <img src="bg.jpg" alt="" className={styles.bg} />
        {text}
        {input}
      </div>

      {toggleRepo && (
        <div className={styles.container2} id="main">
          <div className={styles.mainSection}>
            <div className={styles.closeArea}>
              <div className={styles.closeBtn} onClick={() => closeRepo()}>
                <img src="close.png" alt="" />
              </div>
            </div>
            <Profile
              imgSrc={user.avatar_url}
              name={user.login}
              fullName={user.name}
            />
            <MainBox repoData={realRepo} />

            {/* <Profile />
          <MainBox repoData={fakeRepo} /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPageContainer;
