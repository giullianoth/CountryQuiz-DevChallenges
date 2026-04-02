import { IGeneratedQuestion } from "./question";

export interface IQuestionContext {
    questionsQuantity: number;
    loading: boolean;
    error: string | null;
    currentQuestionNumber: number;
    points: number;
    endGame: boolean;
    revealed: boolean;
    currentQuestion: IGeneratedQuestion | null;
    selectedQuestions: IGeneratedQuestion[];
    handleArrangeQuestion: () => Promise<void>;
    handleEndGame: () => void;
    handleRestartGame: () => void;
    handleAnswerQuestion: (providedAnswer: string, revealTimeout: number) => void;
};