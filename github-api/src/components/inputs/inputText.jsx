import styles from "@/styles/inputs/Input.module.css";
const InputText = ({ toggle, changeSearchUser, searchUser }) => (
  <div className={styles.inputText}>
    <input
      type="text"
      placeholder="Input your github username..."
      value={searchUser}
      onChange={(e) => changeSearchUser(e)}
    />
    <div className={styles.btn}>
      <a href="#main" onClick={() => toggle()}>
        <img src="git.svg" alt="" />
      </a>
    </div>
  </div>
);

export default InputText;
