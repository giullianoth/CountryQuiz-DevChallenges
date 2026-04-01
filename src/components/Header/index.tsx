import styles from "./Header.module.css";

type Props = {
    points: number
    questionsQuantity: number
};

const Header = ({ points, questionsQuantity }: Props) => {
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