import React, {FC} from 'react';
import MetaTitle from "../MetaTitle/MetaTitle";
import getThemedStyles from "../Layout/getThemedStyles";
// @ts-ignore
import styles from "./Header.module.scss";

interface props {
    pageTitle : string
}

const Header : FC<props> = ({pageTitle}) => {
    const userTheme = 0;
    const theme = getThemedStyles(userTheme, styles);

    return (
        <header className={theme}>
            <MetaTitle title={pageTitle} />
            <div className={styles.container}>
                <div className={styles.logo}>
                    TODO приложение
                </div>
                <select>
                    <option>Светлая тема</option>
                    <option>Темная тема</option>
                </select>
            </div>
        </header>
    );
};

export default Header;