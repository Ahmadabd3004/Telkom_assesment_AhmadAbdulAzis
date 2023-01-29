import styles from "@/styles/btn/CloseBtn.module.css";
import Image from "next/image";
const CloseBtn = ({ closeRepo }) => (
  <div className={styles.closeArea}>
    <div className={styles.closeBtn} onClick={() => closeRepo()}>
      <Image src="/close.png" alt="" width={100} height={100} />
    </div>
  </div>
);

export default CloseBtn;
