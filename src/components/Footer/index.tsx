import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__author}>
                Coded by{" "}
                <a href="https://github.com/giullianoth" target="_blank" rel="noreferrer noopener">Giulliano Guimarães</a>{" "}
                | Challenge by{" "}
                <a href="https://devchallenges.io/challenge/country-quizz" target="_blank" rel="noreferrer noopener">devChallenges.io</a>.
            </div>
        </footer>
    );
};

export default Footer;