import { useSelector } from 'react-redux';
import Category from 'components/UI/category/Category';
import styles from 'assets/styles/Main.module.scss';

function Expenses({setMode}) {
    const expenses = useSelector(state => state.expenses);
    const gains = useSelector(state => state.gains);

    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={()=>setMode('gains')} className={styles.diagramm}>
                    <h2 className={styles.diagramm__title}>{expenses.title}</h2>
                    <p className={styles.diagramm__amount} style={{color: '#e50012'}}>{expenses.amount}$</p>
                    <p className={styles.diagramm__secondaryAmmount} style={{color: '#00a000'}}>{gains.amount}$</p>
                </button>
            </div>
            <div className={styles.categories}>
                {expenses.categories.map(category => {
                    return <Category category={category} key={category.id} />
                })}
            </div>
        </div>
    </div>
}

export default Expenses