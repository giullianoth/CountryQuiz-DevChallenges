import { ICountry } from "@/types/country";
import CheckRoundFill from "../svg/CheckRoundFill";
import CloseRoundFill from "../svg/CloseRoundFill";
import styles from "./Answer.module.css";
import InlineFlag from "../InlineFlag";

type Props = {
    answer: string;
    correct?: boolean;
    wrong?: boolean;
    selected?: boolean
    flag?: ICountry["flags"];
    flagInAnswer?: boolean;
};

const Answer = ({ correct, wrong, selected, answer, flag, flagInAnswer }: Props) => {
    const renderedAnswer = flag && flagInAnswer ? <InlineFlag flagUrl={answer} /> : answer

    return (
        <button
            className={
                styles.answer
                + (correct ? ` ${styles.correct}` : "")
                + (wrong ? ` ${styles.wrong}` : "")
                + (selected ? ` ${styles.selected}` : "")
            }>
            {renderedAnswer}
            {wrong && <CloseRoundFill />}
            {correct && <CheckRoundFill />}
        </button>
    );
};

export default Answer;