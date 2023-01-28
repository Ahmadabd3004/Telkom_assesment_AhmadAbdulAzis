import styles from "@/styles/boxes/Box.module.css";
import skeletonStyles from "@/styles/skeletons/Skeleton.module.css";

const LoadingBox = () => (
  <>
    <div
      className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText3}`}
    ></div>
    <div
      className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText4}`}
    ></div>
  </>
);

const Box = ({ userName, repoName, lastUpdate }) => {
  return (
    <div
      className={styles.box}
      onClick={() => {
        if (repoName) {
          window.open(`https://github.com/${userName}/${repoName}`);
        }
      }}
    >
      {repoName && lastUpdate ? (
        <>
          <p>{repoName}</p>
          <h5>Last Update : {lastUpdate}</h5>
        </>
      ) : (
        <LoadingBox />
      )}
    </div>
  );
};

export default Box;
