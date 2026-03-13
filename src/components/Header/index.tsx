import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Country Quiz</h1>

            <div className={styles.header__points}>
                4/10 Points
            </div>
        </header>
    );
};

export default Header;