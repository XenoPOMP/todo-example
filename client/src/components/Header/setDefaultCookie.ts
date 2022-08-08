import Cookies from "universal-cookie";

const setDefaultCookie = () => {
    const cookies = new Cookies();
    cookies.set('theme', 0);
    cookies.set('token', '');
};

export default setDefaultCookie;