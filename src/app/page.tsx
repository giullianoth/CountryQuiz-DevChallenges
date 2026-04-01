"use client";

import Footer from "@/components/Footer";
import Game from "@/components/Game";
import { QuestionProvider } from "@/context/questions";

export default function Home() {

  return (
    <QuestionProvider>
      <div className="container">
        <Game />
        <Footer />
      </div>
    </QuestionProvider>
  );
}
