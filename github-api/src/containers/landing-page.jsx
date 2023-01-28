import styles from "@/styles/LandingPage.module.css";
import { useState } from "react";
import "animate.css";
import MainText from "@/components/texts/mainText";
import InputText from "@/components/inputs/inputText";
import Profile from "@/components/profiles/profile";
import MainBox from "@/components/boxes/mainBox";
import axios from "axios";
import CloseBtn from "@/components/btn/CloseBtn";
import { useSelector, useDispatch } from "react-redux";

const LandingPageContainer = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [toggleRepo, setToggleRepo] = useState(false);
  const [searchUser, setSearchUser] = useState("");

  const repo = useSelector((state) => state.repositories);
  const user = useSelector((state) => state.user);

  const toggleText = () => {
    setToggle(!toggle);
  };
  const toggleRepoHandler = async () => {
    setToggleRepo(true);
    const { data: repo } = await axios.get(
      `https://api.github.com/users/${searchUser}/repos?sort=updated`
    );
    dispatch({
      type: "repositories/fetchData",
      payload: repo,
    });

    const { data: user } = await axios.get(
      `https://api.github.com/users/${searchUser}`
    );
    dispatch({
      type: "user/fetchData",
      payload: user,
    });
  };
  const closeRepo = () => {
    setToggleRepo(false);
    dispatch({
      type: "repositories/removeData",
    });
    dispatch({
      type: "user/removeData",
    });
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
            <CloseBtn closeRepo={closeRepo} />
            <Profile
              imgSrc={user.avatar_url}
              name={user.login}
              fullName={user.name}
            />
            <MainBox repoData={repo} userName={user.login} />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPageContainer;
