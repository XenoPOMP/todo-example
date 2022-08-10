import Axios from "axios";

const getAllCards = () => Axios.get("http://localhost:4200/api/cards/getAll").then(response => response.data);

export default getAllCards;