import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data);
  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>Welcome to the three musketeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <Link href="about">About</Link>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/icon/img1"
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
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <b> Business Degree:</b>
          {information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business") {
              return(
                <Card key={index} degree={info.degree} color="red" font="10px"/>
              )
            }      
          })}
        </div>
        <div className={styles.grid}>
          <b> Computing Degree:</b>
          {information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing") {
              return(
                <Card key={index} degree={info.degree} color="blue" font='10px'/>
              )
            }      
          })}
        </div>
      </main>
    </>
  )
  }