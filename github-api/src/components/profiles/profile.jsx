import styles from "@/styles/profiles/Profile.module.css";
import skeletonStyles from "@/styles/skeletons/Skeleton.module.css";
const Profile = ({ imgSrc, name, fullName }) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={`${styles.pp} ${skeletonStyles.skeleton}`}>
          {imgSrc && (
            <>
              <a href={imgSrc} target="_blank">
                <img src={imgSrc} alt="" />
              </a>
            </>
          )}
        </div>
        <div className={styles.line}></div>
        <div className={`${styles.name}`}>
          {name && fullName ? (
            <>
              <a href={`https://github.com/${name}`} target="_blank">
                {fullName}
              </a>
              <h5>{name}</h5>
            </>
          ) : (
            <>
              <div
                className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`}
              ></div>
              <div
                className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText2}`}
              ></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;