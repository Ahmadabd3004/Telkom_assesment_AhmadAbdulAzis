import styles from "@/styles/texts/MainText.module.css";
import RightText from "@/components/texts/rightText";
import LeftText from "@/components/texts/leftText";
const MainText = ({ toggleText, textStyle }) => {
  let textLeft = <LeftText toggleText={toggleText} />;
  let textRight = <RightText />;
  let text = (
    <div className={styles[textStyle]}>
      {textLeft}
      {textRight}
    </div>
  );

  return <>{text}</>;
};

export default MainText;
