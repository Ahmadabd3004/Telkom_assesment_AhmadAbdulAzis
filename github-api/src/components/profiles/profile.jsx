import styles from "@/styles/profiles/Profile.module.css";
import skeletonStyles from "@/styles/skeletons/Skeleton.module.css";
const Profile = ({ imgSrc, name, fullName }) => {
  let textFullName = (
    <div
      className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`}
    ></div>
  );
  let textName = (
    <div
      className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText2}`}
    ></div>
  );

  if (fullName) {
    textFullName = (
      <a href={`https://github.com/${name}`} target="_blank">
        {fullName}
      </a>
    );
  }
  if (name) {
    textName = <h5>{name}</h5>;
  }
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
          {textFullName}
          {textName}
        </div>
      </div>
    </>
  );
};

export default Profile;
