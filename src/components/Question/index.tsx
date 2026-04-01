import { ICountry } from "@/types/country";
import InlineFlag from "../InlineFlag";

type Props = {
    question: string;
    flag?: ICountry["flags"];
    flagInQuestion?: boolean;
};

const Question = ({ question, flag, flagInQuestion }: Props) => {
    const slicedQuestion = flag && flagInQuestion ? question.split("{flag}") : undefined;

    const renderedQuestion = flag && flagInQuestion && slicedQuestion
        ? <>{slicedQuestion[0]}<InlineFlag flagUrl={flag?.png} />{slicedQuestion[1]}</>
        : question;

    return (
        <p>{renderedQuestion}</p>
    );
};

export default Question;