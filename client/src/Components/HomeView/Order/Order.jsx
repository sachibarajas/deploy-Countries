import s from './Order.module.css';

const Order =()=>{
    return(
        <div className={s.Order}>
            <p className={s.Label}>Sort Countries</p>
            <select name="orderBy" id="orderBy" className={s.Select}>
                <option value="" disabled selected hidden className={s.Label}>By</option>
                <option value="name" className={s.Label}>Name</option>
                <option value="population" className={s.Label}>Population</option>
            </select>

            <select name="order" id="order" className={s.Select}>
                <option value="" disabled selected hidden className={s.Label}>Order</option>
                <option value="DESC" className={s.Label}>Descending</option>
                <option value="ASC" className={s.Label}>Ascending</option>
            </select>
        </div>
    )
}

export default Order;