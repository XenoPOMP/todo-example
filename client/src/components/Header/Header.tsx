import React, {FC} from 'react';
import Cookies from "universal-cookie";
import MetaTitle from "../MetaTitle/MetaTitle";
import getThemedStyles from "../Layout/getThemedStyles";
// @ts-ignore
import styles from "./Header.module.scss";
import setDefaultCookie from "./setDefaultCookie";

interface props {
    pageTitle : string
}

const Header : FC<props> = ({pageTitle}) => {
    const cookies = new Cookies();
    let userTheme = parseInt(cookies.get('theme'));
    const theme = getThemedStyles(userTheme, styles);

    return (
        <header className={theme}>
            <MetaTitle title={pageTitle} />
            <div className={styles.container}>
                <div className={styles.logo}>
                    TODO приложение
                </div>
                <select onChange={(e) => {
                        cookies.set('theme', e.target.value);
                        window.location.reload();
                    }
                }>
                    <option value={0} selected={(userTheme == 0)}>Светлая тема</option>
                    <option value={1} selected={(userTheme == 1)}>Темная тема</option>
                </select>
            </div>
        </header>
    );
};

export default Header;