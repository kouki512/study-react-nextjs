
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Content } from '@/components/Content'
import {Headline} from '@/components/Headline'
const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>

          <Headline 
          title={props.title} 
          onClick={() => alert("クリック！") } 
          > 
            <p>{props.title}</p>
          </Headline>

          
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      <Content />
      </main>
    </>
  )
}
