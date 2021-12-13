import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import NavBar from '../comps/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <h1 className={styles.title}>Hello World!</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>

        <Link href="/ninjas">
            <a className={styles.btn}>See more listing</a>
        </Link>
    </div>
  )
}
