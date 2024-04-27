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
                    <NavLink to={"/Signup"}  className={style.navlink} >Inscription</NavLink>
                </button>

                <button className={style.connection__button}>
                <NavLink to={"/Login"}  className={style.navlink} >Connection</NavLink> 
                </button>
            </div>
        </div>
    )
}
export default Home

