import Footer from "@/components/Footer"
import styles from "./EndGame.module.css"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <div className="container">
            <div className={styles.endGame__wrapper}>
                <Image
                    className={styles.endGame__image}
                    src="/images/congrats.png"
                    alt="Congratulations"
                    width={349}
                    height={107}
                    priority />

                <h2 className={styles.endGame__title}>Congrats! You completed the quiz.</h2>

                <p className={styles.endGame__points}>
                    You answer 4/10 correctly
                </p>

                <Link href="/" className={styles.endGame__link}>
                    Play again
                </Link>
            </div>

            <Footer />
        </div>
    )
}

export default Page