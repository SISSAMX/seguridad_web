import Head from 'next/head'
import Button from '../common/components/Button'
import Card from '../common/components/Card'
import styles from '../styles/Home.module.css'
import Header from '../common/components/Components/header';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link 
} from "react-router-dom";



const Home = ({btnStyle}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.titulo}>CSS</h1>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> 
      <Header/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Home.defaultProps = {
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500',
  },
}
export default Home;
