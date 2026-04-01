import styles from "./InlineFlag.module.css";
import Image from "next/image";

type Props = {
    flagUrl: string
};

const InlineFlag = ({ flagUrl }: Props) => {
    return (
        <Image
            className={styles.flag}
            src={flagUrl}
            width={48}
            height={34}
            alt={""} />
    );
};

export default InlineFlag;