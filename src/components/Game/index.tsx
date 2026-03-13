import CheckRoundFill from "../svg/CheckRoundFill";
import CloseRoundFill from "../svg/CloseRoundFill";
import styles from "./Game.module.css";

const Game = () => {
  return (
    <main>
      <div className={styles.game__container}>
        <div className={styles.game__wrapper}>
          <div className={styles.game__questions}>
            <button className={`${styles.game__questionButton} ${styles.past}`}>
              1
            </button>
            <button className={styles.game__questionButton}>
              2
            </button>
            <button className={styles.game__questionButton}>
              3
            </button>
            <button className={styles.game__questionButton}>
              4
            </button>
            <button className={styles.game__questionButton}>
              5
            </button>
            <button className={styles.game__questionButton}>
              6
            </button>
            <button className={styles.game__questionButton}>
              7
            </button>
            <button className={styles.game__questionButton}>
              8
            </button>
            <button className={styles.game__questionButton}>
              9
            </button>
            <button className={styles.game__questionButton}>
              10
            </button>
          </div>

          <div className={styles.game__currentQuestion}>
            <p>Which country does this flag 🇫🇮 belong to?</p>
          </div>

          <div className={styles.game__answers}>
            <button className={`${styles.game__answer} ${styles.selected}`}>
              Sweden
              <CloseRoundFill />
            </button>

            <button className={styles.game__answer}>
              Vietnam
            </button>

            <button className={styles.game__answer}>
              Finland
              <CheckRoundFill />
            </button>

            <button className={styles.game__answer}>
              Austria
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Game;