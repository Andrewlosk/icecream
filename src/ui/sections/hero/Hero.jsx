import styles from './hero.module.css'
import styled from 'styled-components'
import Button from '../../components/button/Button'

const Title = styled.h1`
    text-align:left;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 38px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--fon-color);
    margin: 0;
    margin-top: 40px;
`
const Link = styled.a`
    font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
text-decoration: underline;
text-decoration-skip-ink: none;
text-align: center;
color: #f8d24e;
`

export default function Hero() {
    return (
        <section className={`${styles.hero} section`}>
            <div className="container">
                <Title>ice cream <br/> made with <br/> passion</Title>
                <div className={`${styles.buttonBlock}`}>
                    <Button variant='outline' link='#products'>Products</Button>
                    <Link className='' href="#how">How it’s made?</Link>
                </div>

                <div className={`${styles.contentBlock}`}>
                    <img src="../../images/hero/iceCreamPic.png" alt="iceCream" width={225} height={225}/>

                    <div className={`${styles.content}`}>
                        <p>Indulge in a scoop of ice <br /> cream made with passion and <br /> treat your taste buds to an <br /> unforgettable experience!</p>
                        <img width={41} height={16} src="../../images/hero/Arrow.svg" alt="arrow" />
                    </div>

                </div>


            </div>

        </section>

    )
}