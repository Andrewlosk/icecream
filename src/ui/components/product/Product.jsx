import styles from './product.module.css'

// import image from '../../../../public/images/products/iceCreamProducts.png'
export default function Product({title, img, variant, shadow, children}) {

    
    return(
        <div className={`${styles.product}`} style={{backgroundColor: `${variant}`}}>


            <div className={`${styles.round}`} style={{boxShadow:`${shadow}`}}></div>
            <img className={`${styles.img}`} src={img} alt={title} width={302} height={302}/>
            <h3 className={`${styles.title}`}>{title}</h3>
            <p className={`${styles.desc}`}>{children}</p>
            
            <a href='/' className={`${styles.arrow}`}>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#131313" />
                </svg>
            </a>

        </div>

    )
}