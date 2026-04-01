import { useQuestionContext } from "@/context/questions";
import styles from "./Header.module.css";

const Header = () => {
    const { points, questionsQuantity } = useQuestionContext();

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Country Quiz</h1>

            <div className={styles.header__points}>
                {points}/{questionsQuantity} Points
            </div>
        </header>
    );
};

export default Header;