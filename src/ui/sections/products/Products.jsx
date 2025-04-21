import styles from './products.module.css'
import Product from '../../components/product/Product'

export default function Products() {
    return(
        <section className={`${styles.section}`}>
            <p className={`${styles.subtitle}`}>100% natural</p>
            <h2 className={`${styles.title}`}>products</h2>
            <div className={`${styles.block}`}>
                <Product title={'ice cream' } img={'/images/products/iceCreamProducts.png'} variant='#aec6a5' shadow='0 8px 30px 0 rgba(10, 136, 23, 0.25)'>
                    Soft ice cream with a <br /> delicate taste. Made with <br /> milk, cream, sugar and <br /> natural stabilizer
                </Product>

                <Product title={'ice coffee' } img={'/images/products/iceCoffeeProducts.png'} variant='#efd478' shadow='0 8px 30px 0 rgba(153, 114, 23, 0.25)'>
                    ragrant invigorating drink <br /> created from 100% natural <br /> ingredients without the use <br /> of preservatives and flavor <br /> enhancers
                </Product>

                <Product title={'milkshakes' } img={'/images/products/milkshakeProducts.png'} variant='#d6936d' shadow='0 8px 30px 0  rgba(0, 0, 0, 0.25)'>
                    Sweet drinks based on milk <br /> and ice cream,<br /> supplemented with syrups,<br /> fruits, berries and other<br /> sweets of your choice


                </Product>
                

            </div>

        </section>
    )
}