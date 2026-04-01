"use client";

import styles from "./EndGame.module.css";
import Image from "next/image";

const EndGame = () => {
    return (
        <div className={styles.endGame__wrapper}>
            <Image
                className={styles.endGame__image}
                src="/images/congrats.png"
                alt="Congratulations"
                width={349}
                height={107}
                priority />

            <h2 className={styles.endGame__title}>Congrats! You completed the quiz.</h2>

            <p className={styles.endGame__points}>
                You answer 4/10 correctly
            </p>

            <button className={styles.endGame__link}>
                Play again
            </button>
        </div>
    );
};

export default EndGame;