import React, {FC} from 'react';
// @ts-ignore
import styles from './Card.module.scss';
import Cookies from "universal-cookie";
import getThemedStyles from "../../Layout/getThemedStyles";

interface props {
    number : number
    content : string
}

const Card : FC<props> = (
    {
        number,
        content
    }
) => {
    const cookies = new Cookies();
    let userTheme = parseInt(cookies.get('theme'));
    const theme = getThemedStyles(userTheme, styles);

    return (
        <div className={`${styles.card} ${theme}`}>
            <div className={styles.number}>
                {number}
            </div>

            <div className={styles.content}>
                {content}
            </div>

            <div className={styles.buttonGrid}>
                <div className={`${styles.button} ${styles.update}`}>
                    Обновить
                </div>
                <div className={`${styles.button} ${styles.delete}`}>
                    Удалить
                </div>
            </div>
        </div>
    );
};

export default Card;