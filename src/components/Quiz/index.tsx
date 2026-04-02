"use client";

import styles from "./Game.module.css";
import Answer from "../Answer";
import { useEffect, useState } from "react";
import Question from "../Question";
import Loading from "../Loading";
import { useQuestionContext } from "@/context/questions";
import Progress from "../Progress";

const REVEAL_ANSWER_TIMEOUT = 1000;

const Quiz = () => {
  const {
    questionsQuantity,
    handleArrangeQuestion,
    error,
    currentQuestionNumber,
    loading,
    currentQuestion,
    handleAnswerQuestion,
    revealed,
    handleGoToQuestion,
  } = useQuestionContext();

  const [disbledAnswers, setDisabledAnswers] = useState<boolean>(false);

  const buttons = Array.from({ length: questionsQuantity }, (_, index) => index + 1);

  useEffect(() => {
    const startQuiz = async () => {
      if (!revealed) {
        await handleArrangeQuestion()
        setDisabledAnswers(false);
      }
    }

    startQuiz()
  }, [handleArrangeQuestion, revealed]);

  const correct = (option: string) => {
    const isCorrect = currentQuestion?.answered
      ? currentQuestion?.answered && currentQuestion?.correctAnswer === currentQuestion?.providedAnswer
      : false

    return (currentQuestion?.answered && option === currentQuestion?.correctAnswer)
      || (isCorrect && option === currentQuestion?.correctAnswer);
  };

  const wrong = (option: string) => {
    const isWrong = currentQuestion?.answered
      ? currentQuestion?.answered && currentQuestion?.correctAnswer !== currentQuestion?.providedAnswer
      : false

    return (isWrong && option === currentQuestion?.providedAnswer);
  };

  const handleSelectAnswer = (answer: string) => {
    handleAnswerQuestion(answer, REVEAL_ANSWER_TIMEOUT);
    setDisabledAnswers(true);
  }

  console.log(currentQuestion);

  return (
    <main>
      <div className={styles.game__container}>
        {revealed && <Progress timeout={REVEAL_ANSWER_TIMEOUT} />}

        <div className={styles.game__wrapper}>
          <div className={styles.game__questions}>
            {buttons.map(btn => (
              <button
                key={btn}
                disabled={!(btn <= currentQuestionNumber)}
                className={styles.game__questionButton + (btn <= currentQuestionNumber ? ` ${styles.past}` : "")}
                onClick={() => handleGoToQuestion(btn - 1)}>
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
                        flagInAnswer={currentQuestion?.flagInAnswer}
                        onSelect={handleSelectAnswer}
                        selected={currentQuestion?.providedAnswer === option}
                        correct={correct(option)}
                        wrong={wrong(option)}
                        disabled={disbledAnswers || currentQuestion.answered} />
                    ))}
                </div>
              </>}
        </div>
      </div>
    </main>
  );
};

export default Quiz;