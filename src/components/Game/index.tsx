"use client";

import styles from "./Game.module.css";
import Answer from "../Answer";
import { useEffect, useState } from "react";
import { ICountry } from "@/types/country";
import InlineFlag from "../InlineFlag";
import useArrangeQuestions from "@/services/questions";
import { IGeneratedQuestion } from "@/types/question";
import Question from "../Question";

type Props = {
  onEndGame: () => void
  questionsQuantity: number
  currentQuestionNumber: number
};

const Game = ({ onEndGame, questionsQuantity, currentQuestionNumber }: Props) => {
  const buttons = Array.from({ length: questionsQuantity }, (_, index) => index + 1);
  const { arrangeQuestion, currentQuestion, loading, error } = useArrangeQuestions();

  useEffect(() => {
    const startQuiz = async () => {
      await arrangeQuestion()
    }

    startQuiz()
  }, [arrangeQuestion]);

  return (
    <main>
      <div className={styles.game__container}>
        <div className={styles.game__wrapper}>
          <div className={styles.game__questions}>
            {buttons.map(btn => (
              <button
                key={btn}
                disabled
                className={styles.game__questionButton + (btn <= currentQuestionNumber ? ` ${styles.past}` : "")}>
                {btn}
              </button>
            ))}
          </div>

          <div className={styles.game__currentQuestion}>
            {currentQuestion &&
              <Question
                question={currentQuestion?.question}
                flag={currentQuestion?.flag}
                flagInQuestion={currentQuestion?.flagInQuestion} />
            }
          </div>

          <div className={styles.game__answers}>
            {currentQuestion && currentQuestion.options.length > 0 &&
              currentQuestion.options.map(option => (
                <Answer
                  key={option}
                  answer={option}
                  flag={currentQuestion?.flag}
                  flagInAnswer={currentQuestion?.flagInAnswer} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Game;