import s from './Footer.module.css';
import leftArrow from '../../Assets/Images/leftArrrow.png';
import rightArrow from '../../Assets/Images/rightArrow.png';

const Footer =({itemsPerpage, allItems, paginado})=>{
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(allItems/itemsPerpage); i++){
        pageNumbers.push(i+1);
    }
    return(
        <div className={s.Footer}>
            <ul className={s.Pages}>
                { pageNumbers && 
                pageNumbers.map(number => (
                <a onClick={() => paginado(number)}className={s.Number} key={number}>
                    <li className={s.listItem}>
                        {number}
                    </li>
                </a>
            ))}
            </ul>

        </div>
    )
}

export default Footer;