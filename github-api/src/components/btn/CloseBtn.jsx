import styles from "@/styles/btn/CloseBtn.module.css";
const CloseBtn = ({ closeRepo }) => {
  return (
    <>
      <div className={styles.closeArea}>
        <div className={styles.closeBtn} onClick={() => closeRepo()}>
          <img src="close.png" alt="" />
        </div>
      </div>
    </>
  );
};
export default CloseBtn;
