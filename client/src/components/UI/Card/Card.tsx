import React, {FC} from 'react';
// @ts-ignore
import styles from './Card.module.scss';
import Cookies from "universal-cookie";
import getThemedStyles from "../../Layout/getThemedStyles";
import Axios from "axios";

interface props {
    number : number
    content? : string
    userInput : string
}

const Card : FC<props> = (
    {
        number,
        content,
        userInput
    }
) => {
    const cookies = new Cookies();
    let userTheme = parseInt(cookies.get('theme'));
    const theme = getThemedStyles(userTheme, styles);

    const onDelete = () => {
        Axios.post("http://localhost:4200/api/cards/delete", {reqId: number})
            .then((response) => console.log(''));
    }

    const onUpdate = () => {
        Axios.post("http://localhost:4200/api/cards/update", {reqId: number, reqText: userInput})
            .then((response) => console.log(''));
    }

    const getNumberScale = () => {
        if (number >= 1000   && number <= 9999) return styles.fourDigits;
        if (number >= 10000  && number <= 99999) return styles.fiveDigits;
        if (number >= 100000 && number <= 999999) return styles.sixDigits;

        return '';
    }

    return (
        <div className={`${styles.card} ${theme}`}>
            <div className={`${styles.number} ${getNumberScale()}`}>
                {number}
            </div>

            <div className={styles.content}>
                {content}
            </div>

            <div className={styles.buttonGrid}>
                <div className={`${styles.button} ${styles.update} ${(userInput === "") ? styles.blocked : ''}`} onClick={onUpdate}>
                    Обновить
                </div>
                <div className={`${styles.button} ${styles.delete} ${(userInput === "") ? styles.blocked : ''}`} onClick={onDelete}>
                    Удалить
                </div>
            </div>
        </div>
    );
};

export default Card;