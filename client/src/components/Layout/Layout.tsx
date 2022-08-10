import React, {FC} from 'react';
import MetaTitle from "../MetaTitle/MetaTitle";
// @ts-ignore
import styles from "./Layout.module.scss";
import getThemedStyles from "./getThemedStyles";
import Header from "../Header/Header";
import Cookies from "universal-cookie";
import setDefaultCookie from "../Header/setDefaultCookie";

interface props {
    pageTitle : string
    content? : React.ReactNode
}

const Layout : FC<props> = (
    {
        pageTitle,
        content
    }
    ) => {
    const cookies = new Cookies();
    let userTheme = parseInt(cookies.get('theme'));
    const theme = getThemedStyles(userTheme, styles);

    return (
        <div className={`${styles.layout} ${theme}`}>
            <Header pageTitle={pageTitle} />
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );
};

export default Layout;