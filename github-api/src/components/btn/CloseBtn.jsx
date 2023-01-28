import styles from "@/styles/btn/CloseBtn.module.css";
const CloseBtn = ({ closeRepo }) => (
  <div className={styles.closeArea}>
    <div className={styles.closeBtn} onClick={() => closeRepo()}>
      <img src="close.png" alt="" />
    </div>
  </div>
);

export default CloseBtn;
