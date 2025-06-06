import styles from './header.module.css'
import Button from '../../components/button/Button'


export default function Header() {
    return(
        <header className={styles.header}>
            <div className={`container ${styles.content}`}>
                <img className={styles.logo} src='/icons/ice-cream-logo.svg' alt="logo" width={60} height={65}/>

                <nav>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}><a href="/">Home</a></li>
                        <li className={styles.navItem}><a href="#made">How it’s made?</a></li>
                        <li className={styles.navItem}><a href="#products">Our products</a></li>
                        <li className={styles.navItem}><a href="#footer">Contact</a></li>

                    </ul>
                </nav>

                <Button arrow={true} variant='primary'>Buy now</Button>
                {/* <Button arrow={true} variant='outline'>Buy now</Button> */}

            </div>
        </header>
    )
}