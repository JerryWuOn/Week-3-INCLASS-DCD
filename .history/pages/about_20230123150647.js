import Head from 'next/head'
import data from '../data/employees.json'
import { useState } from 'react'

export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])
    
    return (
        <>
            <Head>
                <title>Programs</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <NavBar/>
                <div className={styles.heading}>
                    <h1>The Team</h1>
                </div>
                <div className={styles.employeeDetails}>
                    <h2 className={styles.mainTitle}>Employee Details</h2>
                        <h3 className={styles.icon}>Image</h3>
                        <h3 className={styles.first}>First Name</h3>
                        <h3 className={styles.last}>Last Name</h3>
                        <h3 className={styles.id}>Position</h3>
                        <h3 className={styles.dep}>Employee ID</h3>
                        <h3 className={styles.pos}>department</h3>
                    <div>
                    {information && information.map((info, index) => (
                        <div className={styles.map} key={index}>
                            <div className={styles.mapIcon}><img src={info.image} width="50"></img></div>
                            <div className={styles.mapFirst}>{info.firstName}</div>
                            <div className={styles.mapLast}>{info.lastName}</div>
                            <div className={styles.mapId}>{info.employeeID}</div>
                            <div className={styles.mapDep}>{info.department}</div>
                            <div className={styles.mapPos}>{info.position}</div>
                        </div>
                        )
                    )
                    }
                    </div>
                </div>
            </main>
        </>
    )
}