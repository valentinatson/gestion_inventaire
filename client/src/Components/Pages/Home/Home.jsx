import logo from "../../../Assets/Pictures/logo.jpg"
import style from "./Home.module.css"
import { NavLink } from "react-router-dom"


const Home = () => {
    return(
        <div>
            <div className={style.section__logo}>
                <img src={logo} className={style.logo} alt="logo" />
                <h2 className={style.title}>STOCKHUB</h2>
            </div>
            <div className={style.section__button}>
                <button className={style.inscription__button}>
                    Inscription
                </button>

                <button className={style.connection__button}>
                    Connection
                </button>
            </div>
        </div>
    )
}
export default Home