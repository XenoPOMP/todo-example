import React, {useState} from 'react';
import Layout from "../Layout/Layout";
// @ts-ignore
import styles from "./MainPage.module.scss";
import Cookies from "universal-cookie";
import getThemedStyles from "../Layout/getThemedStyles";
import Card from "../UI/Card/Card";
import Axios from "axios";
import card from "../UI/Card/Card";

const MainPage = () => {
    const cookies = new Cookies();
    let userTheme = parseInt(cookies.get('theme'));
    const theme = getThemedStyles(userTheme, styles);

    const [input, setInput] = useState('');

    const addNewTodo = () => {
        Axios.post("http://localhost:4200/api/cards/addNew", {reqText: input})
            .then((response) => console.log(''));
    }

    const [cardList, setCardList] = useState([]);
    Axios.get("http://localhost:4200/api/cards/getAll")
        .then((response) => setCardList(response.data));

    // @ts-ignore
    let extractedList = cardList.map((card) => <Card number={card.card_id} content={card.card_text} userInput={input} />);

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
                        <button onClick={addNewTodo} className={(input === "") ? styles.blocked : ''}>Добавить</button>
                    </div>

                    <div id={'todos'}>
                        {extractedList}
                    </div>
                </div>
            }
        />
    );
};

export default MainPage;