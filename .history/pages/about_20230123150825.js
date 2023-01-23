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
            <main className={styles.main}avBar/>
                <div className={styles.heading}>
                    <h1>The Team</h1>
                </div>
                <div className={styles.employeeDetails}>
                    <h2 className={styles.mainTitle}>Employee Details</h2>
                        <h3>Image</h3>
                        <h3>First Name</h3>
                        <h3>Last Name</h3>
                        <h3>Position</h3>
                        <h3>Employee ID</h3>
                        <h3>department</h3>
                    <div>
                    </div>
                </div>
            </main>
        </>
    )
}