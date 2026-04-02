import { IGeneratedQuestion, IQuestionTemplate, IQuestionField } from "@/types/question";
import { useCallback, useState } from "react";
import { getAllCountries } from "./api-service";
import { generateQuestion, getRandom } from "@/utils/questions";
import { IQuestionContext } from "@/types/context";

const QUESTIONS_QUANTITY = 10;

const QUESTIONS: string[] = [
    "Which is the [flag] of {country}?",
    "Which [country] does this flag {flag} belong to?",
    "Which [region] is {country} located on?",
    "Which [country] is located in {region}?",
    "Which [subregion] is {country} located on?",
    "Which [country] is located in {subregion}?",
    "Which is the [capital] of {country}?",
    "Which [country] has {capital} as capital?",
    "Which is the [currency] of {country}?",
    "Which [country] has {currency} as currency?",
    "Which is the [language] spoken in {country}?",
    "Which [country] is {language} language spoken in?",
    "Which [border] borders {country}?",
];

const QUESTION_TEMPLATES: IQuestionTemplate[] = QUESTIONS.map(question => ({
    text: question,
    referenceField: question.substring(question.indexOf("{") + 1, question.indexOf("}")) as IQuestionField,
    targetField: question.substring(question.indexOf("[") + 1, question.indexOf("]")) as IQuestionField,
}));

const useArrangeQuestions = (): IQuestionContext => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<IGeneratedQuestion | null>(null);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
    const [selectedQuestions, setSelectedQuestions] = useState<IGeneratedQuestion[]>([]);
    const [points, setPoints] = useState<number>(0);
    const [endGame, setEndGame] = useState<boolean>(false);
    const [revealed, setRevealed] = useState<boolean>(false);

    const handleArrangeQuestion = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const countries = await getAllCountries();
            let country = getRandom(countries);
            const questionTemplate = getRandom(QUESTION_TEMPLATES);

            if (questionTemplate.targetField === "border" && !country.borders.length) {
                country = getRandom(countries.filter(c => c.borders.length > 0));
            }

            const question = generateQuestion(questionTemplate, countries, country);

            setCurrentQuestion(question as IGeneratedQuestion);
            setSelectedQuestions(prev => [...prev, question]);
        } catch (error) {
            console.error("Failed to arrange questions:", error);
            setError("Failed to arrange questions. Please refresh the page and try again.");
        } finally {
            setLoading(false);
        }
    }, []);
    
    const handleEndGame = useCallback(() => {
        setEndGame(true);
    }, []);

    const handleRestartGame = useCallback(() => {
        setSelectedQuestions([]);
        setCurrentQuestion(null);
        setCurrentQuestionNumber(1);
        setPoints(0);
        setEndGame(false);
    }, []);

    const handleAnswerQuestion = useCallback((providedAnswer: string, revealTimeout: number) => {
        if (!currentQuestion || !providedAnswer) {
            return;
        }

        const isCorrect = providedAnswer === currentQuestion.correctAnswer;

        if (isCorrect) {
            setPoints(prev => prev + 1);
        }

        setSelectedQuestions(prev => prev.map(question => question === currentQuestion
            ? {
                ...question,
                answered: true,
                providedAnswer,
            }
            : question
        ));

        setCurrentQuestion(prev => prev ? { ...prev, answered: true, providedAnswer } : prev);

        setRevealed(true);

        setTimeout(() => {
            setCurrentQuestionNumber(prev => prev + 1);
            setRevealed(false);
        }, revealTimeout);
    }, [currentQuestion]);

    const handleGoToQuestion = useCallback((questionIndex: number) => {
        setCurrentQuestion(selectedQuestions[questionIndex])
    }, [selectedQuestions])

    return {
        questionsQuantity: QUESTIONS_QUANTITY,
        loading,
        error,
        currentQuestionNumber,
        points,
        endGame,
        revealed,
        currentQuestion,
        selectedQuestions,
        handleArrangeQuestion,
        handleEndGame,
        handleRestartGame,
        handleAnswerQuestion,
        handleGoToQuestion,
    };
};

export default useArrangeQuestions;