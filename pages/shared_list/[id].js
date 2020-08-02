import Head from "next/head";
import { useRouter } from "next/router";
import {
  Button,
  Heading,
  Image,
  Text,
  Box,
  Spinner,
  Link,
} from "@chakra-ui/core";
import useSWR from "swr";
import styles from "../../styles/Home.module.css";
import { getBackup } from "../../api/backups";
import BirthdayReminderHeader from "../../components/BirthdayReminderHeader";
import Download from "../../components/Download";

export default function Home() {
  const {
    query: { id },
  } = useRouter();
  console.log("ddd", id);
  const { data, error } = useSWR(`/api/backups/${id}`, () => getBackup({ id }));
  return (
    <div className={styles.container}>
      <Head>
        <title>Shared list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!data && !error && <Spinner />}

      {data && <BirthdayReminderHeader />}
      {error && (
        <div>{error?.response?.data?.error || "Shared list was expired"}</div>
      )}
      {data && (
        <>
          <Text mt={6} color="gray.500">
            You can import {data.events_count} event
            {data.events_count > 1 && "s"}
          </Text>
          <Text mt={1} color="gray.500">
            from {data.user_name}
          </Text>

          <Box mt={6}>
            <a href={`bipapp://shared_list?id=${id}`}>
              <Button variantColor="cyan">IMPORT</Button>
            </a>
          </Box>
        </>
      )}
      <Download />
    </div>
  );
}
