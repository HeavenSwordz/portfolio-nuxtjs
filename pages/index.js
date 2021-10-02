import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Laurent Bourget</title>
        <meta name="description" content="Frontend Web developer currently working as a Frontend Web developer for Cirque du Soleil" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Image
          className={styles.hero}
          src="/images/me.jpg"
          width={250}
          height={250}
          alt="A picture of me"
        />

        <h1 className={styles.title}>
          Laurent Bourget
        </h1>

        <p className={styles.description}>
          Frontend Web Developer
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>About me</h2>
            <p>Currently working as a<br />Frontend Web developer for Cirque du Soleil</p>
          </div>

          <div className={styles.card}>
            <h2>Currently working on</h2>
            <ul>
              <li>Building my portfolio with <a href="https://nextjs.org/" target="_blank">Nextjs</a> and <a href="https://firebase.google.com/" target="_blank">Firebase</a></li>
              <li>Working for Cirque du Soleil full time</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles['card--fullwidth']}`}>
            <h2>You can find me here</h2>
            <p className={styles.socials}>
              <a href="https://www.linkedin.com/in/laurent-bourget-91b086143/" title="Contact me on LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" id="Group_1282" data-name="Group 1282" width="25" height="25" viewBox="0 0 76.624 65.326">
                  <path id="Path_2520" data-name="Path 2520" d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67" transform="translate(-903.776 -57.355)" fill="#000000" />
                </svg>
              </a>
              <a href="https://github.com/HeavenSwordz/" target="_blank" title="Checkout my GitHub">
                <svg width="25" height="25" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#000" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
