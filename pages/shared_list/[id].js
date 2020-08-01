import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Home() {
  const {query: {id}} = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Shared list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href={`bipapp://shared_list?id=${id}`}>Import shared events</a>
    </div>
  )
}
