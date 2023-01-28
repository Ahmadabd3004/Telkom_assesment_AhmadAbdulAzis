import styles from "@/styles/boxes/Box.module.css";
import skeletonStyles from "@/styles/skeletons/Skeleton.module.css";
import Box from "./box";

const MainBox = ({ repoData }) => {
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
            let date = updatedAt.getDate();
            const months = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            let month = months[updatedAt.getMonth()];
            let year = updatedAt.getFullYear();
            return (
              <Box
                repoName={e.name}
                lastUpdate={`${date} ${month} ${year}`}
                key={idx}
              />
            );
          })}
      </div>
    </>
  );
};

export default MainBox;
