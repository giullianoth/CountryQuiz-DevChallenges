import { useQuestionContext } from "@/context/questions";
import EndGame from "../EndGame";
import Header from "../Header";
import Quiz from "../Quiz";

const Game = () => {
    const { endGame } = useQuestionContext();

    return (
        <div className="wrapper">
            {endGame
                ? <EndGame />

                : <>
                    <Header />
                    <Quiz />
                </>}
        </div>
    );
};

export default Game;