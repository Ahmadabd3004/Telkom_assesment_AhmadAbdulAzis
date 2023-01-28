import styles from "@/styles/texts/MainText.module.css";
import RightText from "@/components/texts/rightText";
import LeftText from "@/components/texts/leftText";
const MainText = ({ toggleText, textStyle }) => {
  const textLeft = <LeftText toggleText={toggleText} />;
  const textRight = <RightText />;
  const text = (
    <div className={styles[textStyle]}>
      {textLeft}
      {textRight}
    </div>
  );

  return <>{text}</>;
};

export default MainText;
