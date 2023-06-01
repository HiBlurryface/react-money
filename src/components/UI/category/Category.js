import React from 'react'
import styles from './Category.module.scss'

function Category({category}) {
    return <div className={styles.wrapper}>
        <p className={styles.title}>
            {category.title}
        </p>
        <div className={styles.bg} style={{backgroundColor: category.color}}></div>
        <p className={styles.amount} style={{color: category.color}}>{category.amount}$</p>
    </div>
}

export default Category