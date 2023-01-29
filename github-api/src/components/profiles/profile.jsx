import styles from "@/styles/profiles/Profile.module.css";
import skeletonStyles from "@/styles/skeletons/Skeleton.module.css";
import Image from "next/image";

const Profile = ({ imgSrc, name, fullName }) => (
  <div className={styles.profile}>
    <div className={`${styles.pp} ${skeletonStyles.skeleton}`}>
      {imgSrc && (
        <>
          <a href={imgSrc} target="_blank" rel="noreferrer">
            <Image src={imgSrc} alt="" width={100} height={100} />
          </a>
        </>
      )}
    </div>
    <div className={styles.line}></div>
    <div className={`${styles.name}`}>
      {name && fullName ? (
        <>
          <a
            href={`https://github.com/${name}`}
            target="_blank"
            rel="noreferrer"
          >
            {fullName}
          </a>
          <h5>{name}</h5>
        </>
      ) : (
        <div className={skeletonStyles.skeletonProfile}>
          <div
            className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText}`}
          ></div>
          <div
            className={`${skeletonStyles.skeleton} ${skeletonStyles.skeletonText2}`}
          ></div>
        </div>
      )}
    </div>
  </div>
);

export default Profile;
