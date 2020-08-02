import Head from "next/head";
import styles from "../styles/Home.module.css";
import BirthdayReminderHeader from "../components/BirthdayReminderHeader";
import Download from "../components/Download";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bip. Birthday Reminder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BirthdayReminderHeader />
      <Download />
    </div>
  );
}
