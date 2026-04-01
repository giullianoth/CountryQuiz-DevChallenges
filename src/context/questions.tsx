import useArrangeQuestions from "@/services/questions";
import { IQuestionContext } from "@/types/context";
import { createContext, useContext } from "react";

type Props = {
    children: React.ReactNode;
};

const Context = createContext<IQuestionContext | undefined>(undefined);

export const QuestionProvider = ({ children }: Props) => {
    return (
        <Context.Provider value={useArrangeQuestions()}>
            {children}
        </Context.Provider>
    );
};

export const useQuestionContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("useQuestionContext must be used within a <QuestionProvider>.");
    }

    return context;
}