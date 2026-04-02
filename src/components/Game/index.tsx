import { useQuestionContext } from "@/context/questions";
import EndGame from "../EndGame";
import Header from "../Header";
import Quiz from "../Quiz";

const Game = () => {
    const { endGame } = useQuestionContext();

    return (
        endGame
            ? <EndGame />

            : <div className="wrapper">
                <Header />
                <Quiz />
            </div>
    );
};

export default Game;