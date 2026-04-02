import styles from "./Progress.module.css";

type Props = {
    timeout: number;
};

const Progress = ({ timeout }: Props) => {
    return (
        <div className={styles.progress}>
            <div
                className={styles.progress__bar}
                style={{ animationDuration: `${timeout}ms` }}></div>
        </div>
    );
};

export default Progress;