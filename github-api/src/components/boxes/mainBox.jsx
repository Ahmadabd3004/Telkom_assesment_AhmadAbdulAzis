import styles from "@/styles/boxes/Box.module.css";
// import skeletonStyles from "@/styles/skeletons/Skeleton.module.css";
import Box from "./box";
import moment from "moment";

const MainBox = ({ repoData, userName }) => {
  return (
    <>
      <div className={styles.boxArea}>
        {!repoData.length && (
          <>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </>
        )}
        {repoData.length &&
          repoData.map((e, idx) => {
            let updatedAt = new Date(e.updated_at);
            let date = moment(updatedAt).format("MMMM Do YYYY");
            return (
              <Box
                repoName={e.name}
                lastUpdate={date}
                key={idx}
                userName={userName}
              />
            );
          })}
      </div>
    </>
  );
};

export default MainBox;
