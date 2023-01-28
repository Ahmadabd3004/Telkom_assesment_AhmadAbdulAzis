import styles from "@/styles/boxes/Box.module.css";
import skeletonStyles from "@/styles/skeletons/Skeleton.module.css";
const Box = ({ repoName, lastUpdate }) => {
  let textRepo = (
    <div
      className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText3}`}
    ></div>
  );

  let textLastUpdate = (
    <div
      className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText4}`}
    ></div>
  );

  if (repoName) {
    textRepo = <h1>{repoName}</h1>;
  }

  if (lastUpdate) {
    textLastUpdate = <h5>Last Update : {lastUpdate}</h5>;
  }
  return (
    <>
      <div className={styles.box}>
        {textRepo}
        {textLastUpdate}
      </div>
    </>
  );
};

export default Box;
