import React, {useState} from 'react';
import Layout from "../Layout/Layout";
// @ts-ignore
import styles from "./MainPage.module.scss";
import Cookies from "universal-cookie";
import getThemedStyles from "../Layout/getThemedStyles";
import Card from "../UI/Card/Card";

const MainPage = () => {
    const cookies = new Cookies();
    let userTheme = parseInt(cookies.get('theme'));
    const theme = getThemedStyles(userTheme, styles);

    const [input, setInput] = useState('');

    const addNewTodo = () => {
        const todos = document.getElementById('todos');

        if (todos) todos.innerHTML += `Todo added: ${input}`;
    }

    return (
        <Layout
            pageTitle={'TODO App'}
            content={
                <div className={`${styles.page} ${theme}`}>
                    <div className={styles.update}>
                        <input
                            type={"text"}
                            placeholder={'Введи текст'}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={addNewTodo}>Добавить</button>
                    </div>

                    <div id={'todos'}>
                        <Card number={1} />
                        <Card number={2} />
                        <Card number={3} />
                    </div>
                </div>
            }
        />
    );
};

export default MainPage;