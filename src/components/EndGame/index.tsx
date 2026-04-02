"use client";

import { useQuestionContext } from "@/context/questions";
import styles from "./EndGame.module.css";
import Image from "next/image";

const EndGame = () => {
    const { points, questionsQuantity, handleRestartGame } = useQuestionContext();

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
                You answer {points}/{questionsQuantity} correctly
            </p>

            <button
                className={styles.endGame__link}
                onClick={handleRestartGame}>
                Play again
            </button>
        </div>
    );
};

export default EndGame;