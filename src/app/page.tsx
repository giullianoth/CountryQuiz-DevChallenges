"use client";

import EndGame from "@/components/EndGame";
import Footer from "@/components/Footer";
import Game from "@/components/Game";
import Header from "@/components/Header";
import { useState } from "react";

const QUESTIONS_QUANTITY = 10

export default function Home() {
  const [endGame, setEndGame] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<number>(1)

  const handleEndGame = () => setEndGame(true);
  const handleRestartGame = () => setEndGame(false);

  return (
    <div className="container">
      {endGame
        ? <EndGame onRestart={handleRestartGame} />

        : <>
          <Header
            points={points}
            questionsQuantity={QUESTIONS_QUANTITY} />

          <Game
            onEndGame={handleEndGame}
            questionsQuantity={QUESTIONS_QUANTITY}
            currentQuestionNumber={currentQuestion} />
        </>}

      <Footer />
    </div>
  );
}
