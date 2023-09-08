import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Hello";
export const siteTitle: string = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
