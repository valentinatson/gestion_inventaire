import style from "./HomeMenu.module.css"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
/* import Home from "../Pages/Home/Home" */
import logo from "../../Assets/logo.png"
import Iventaire from "../Icons/Inventaire"
import Article from "../Icons/Article"
import Sell from "../Icons/Sell"
import Off from "../Icons/Off"
import Supply from "../Icons/Supply"
import User from "../../Assets/icon/user.svg"


const HomeMenu = () => {
    return (
        <div className={style.container}>
            <div className={style.sideBar}>
                <section className={style.logo__nom}>
                    <img src={logo} className={style.logo} alt="logo" />
                </section>
                <section className={style.linkSection}>
                    <ul className={style.links}>
                        <li>
                            <NavLink to={"/PageArticle"} className={style.link}>
                                <span  className={style.linkIcon}><Article /></span>
                                <span className={style.linkText}>Article</span>
                            </NavLink>
                            
                            <NavLink ></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/PageSell"} className={style.link}>
                                <span  className={style.linkIcon}><Sell /></span>
                                <span className={style.linkText}>Sell</span>
                            </NavLink>
                            
                            <NavLink ></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/PageSupply"}  className={style.link}>
                                <span  className={style.linkIcon}><Supply /></span>
                                <span className={style.linkText}>Supply</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/PageInventaire"} className={style.link}>
                                <span  className={style.linkIcon}><Iventaire /></span>
                                <span className={style.linkText}>Inventaire</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <NavLink to={"/Deconnexion"} className={style.link}>
                                <span  className={style.linkIcon}><Off /></span>
                                <span className={style.linkText}>Deconnexion</span>
                        </NavLink>
                    </ul>
                </section>
            </div>
            <div className={style.page}>
                <hr className={style.navShadow}/>
                <header className={style.header}>
                    <p>Justin</p>
                    <img src={User} alt="user" />
                </header>
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}
export default HomeMenu

