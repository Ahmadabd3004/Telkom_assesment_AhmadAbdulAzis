import styles from "@/styles/LandingPage.module.css";
import { useState } from "react";
import "animate.css";

const LandingPageContainer = () => {
  const [toggle, setToggle] = useState(false);
  let textLeft = (
    <div
      className="animate__animated animate__slideInRight"
      onClick={() => setToggle(!toggle)}
    >
      <h1 className={styles.title}>FIND</h1>
    </div>
  );
  let textRight = (
    <div className="animate__animated animate__slideInLeft">
      <h1 className={styles.title2}>YOUR REPOSITORY</h1>;
    </div>
  );
  let text = (
    <div className={styles.text}>
      {textLeft}
      {textRight}
    </div>
  );

  if (toggle) {
    text = (
      <div className={styles.text2}>
        {textLeft}
        {textRight}
      </div>
    );
  } else {
    text = (
      <div className={styles.text}>
        {textLeft}
        {textRight}
      </div>
    );
  }
  return (
    <>
      <div className={styles.container}>
        <img src="bg.jpg" alt="" className={styles.bg} />
        {text}
        {toggle && (
          <div className={styles.inputText}>
            <input type="text" placeholder="Input your github username..." />
            <div className={styles.btn}>
              <a href="#main">
                <img src="git.svg" alt="" />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className={styles.container} id="main">
        <div className={styles.mainSection}>
          <div className={styles.profile}>
            <div className={`${styles.pp} ${styles.skeleton}`}>
              {/* <img src="contohpp.jpeg" alt="" /> */}
            </div>
            <div className={styles.line}></div>
            <div className={`${styles.name}`}>
              {/* //Versi Skeleton */}
              <div
                className={`${styles.skeleton} ${styles.skeletonText}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText2}`}
              ></div>

              {/* Versi Ori */}
              {/* <h1>Ahmad Abdul Azis</h1>
              <h5>Ahmadabd3004</h5> */}
            </div>
          </div>
          <div className={styles.boxArea}>
            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>
            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>
            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>
            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>
            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>
            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>
            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>

            <div className={styles.box}>
              <div
                className={`${styles.skeleton} ${styles.skeletonText3}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeletonText4}`}
              ></div>
              {/* <h1>Todo-App</h1>
              <h5>Last Update : 27 Nov 2022</h5> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageContainer;
