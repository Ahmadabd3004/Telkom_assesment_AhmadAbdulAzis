import styles from "@/styles/texts/MainText.module.css";
import "animate.css";
const LeftText = ({ toggleText }) => {
  return (
    <>
      <div
        className="animate__animated animate__slideInRight"
        onClick={() => toggleText()}
      >
        <h1 className={styles.leftText}>FIND</h1>
      </div>
    </>
  );
};

export default LeftText;
