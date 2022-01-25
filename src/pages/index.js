import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import Home from '../templates/home/Home'
import Head from 'next/head'

export default function App() {
  return (
    <>
      <Head>
        <title>PlatziShop</title>
      </Head>
      <div className={styles.container}>
          <Home/>
      </div>
    </>
  )
}
