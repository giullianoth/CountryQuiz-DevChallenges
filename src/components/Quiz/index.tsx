"use client";

import styles from "./Game.module.css";
import Answer from "../Answer";
import { useEffect } from "react";
import Question from "../Question";
import Loading from "../Loading";
import { useQuestionContext } from "@/context/questions";

const Quiz = () => {
  const {
    questionsQuantity,
    handleArrangeQuestion,
    error,
    currentQuestionNumber,
    loading,
    currentQuestion,
  } = useQuestionContext();

  const buttons = Array.from({ length: questionsQuantity }, (_, index) => index + 1);

  useEffect(() => {
    const startQuiz = async () => {
      await handleArrangeQuestion()
    }

    startQuiz()
  }, [handleArrangeQuestion]);

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

          {error
            ? <p className={styles.game__error}>{error}</p>

            : loading || !currentQuestion
              ? <Loading />

              : <>
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
              </>}
        </div>
      </div>
    </main>
  );
};

export default Quiz;