import styles from "@/styles/LandingPage.module.css";
import { useState } from "react";
import MainText from "@/components/texts/mainText";
import InputText from "@/components/inputs/inputText";
import Profile from "@/components/profiles/profile";
import MainBox from "@/components/boxes/mainBox";
import axios from "axios";
import CloseBtn from "@/components/btn/CloseBtn";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Image from "next/image";

const LandingPageContainer = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [toggleRepo, setToggleRepo] = useState(false);
  const [searchUser, setSearchUser] = useState("");

  const repo = useSelector((state) => state.repositories);
  const user = useSelector((state) => state.user);

  const toggleRepoHandler = async () => {
    setToggleRepo(true);
    try {
      const { data: user } = await axios.get(
        `https://api.github.com/users/${searchUser}`
      );
      dispatch({
        type: "user/fetchData",
        payload: user,
      });
    } catch (error) {
      setToggleRepo(false);
      return Swal.fire(
        "User Not Found !",
        "Input username correctly !",
        "error"
      );
    }

    const { data: repo } = await axios.get(
      `https://api.github.com/users/${searchUser}/repos?sort=updated`
    );
    dispatch({
      type: "repositories/fetchData",
      payload: repo,
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

  return (
    <>
      <div className={styles.bg}>
        <Image src="/bg.jpg" alt="" fill />
      </div>
      <div className={styles.container}>
        <MainText
          toggleText={() => setToggle(!toggle)}
          textStyle={toggle ? "textClicked" : "text"}
        />
        {toggle && (
          <InputText
            toggle={toggleRepoHandler}
            changeSearchUser={(e) => setSearchUser(e.target.value)}
          />
        )}
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
