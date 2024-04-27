import style from "./HomeMenu.module.css"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
/* import Home from "../Pages/Home/Home" */
/* import logo from "../../Assets/Pictures/logo.jpg" */


const HomeMenu = () => {
    return (
        <div className={style.container}>
            <div className={style.sideBar}>
                <section className={style.logo__nom}>
                    {/* <img src={logo} className={style.logo} alt="logo" /> */}
                    <h2 className={style.title}>StockHub</h2>
                </section>
                <section >
                    <h4><NavLink to={"/PageArticle"}>Article List</NavLink></h4> 
                </section>
                <section>
                    <h4><NavLink to={"/PageSell"}>Sell</NavLink></h4>
                </section>
                <section>
                    <h4><NavLink to={"/PageSupply"}>Supply</NavLink></h4>
                </section>
                <section>
                    <h4><NavLink to={"/PageInventaire"}>Inventaire</NavLink></h4>
                </section>
                <section>
                    <h4><NavLink to={"/Deconnexion"}>Deconnexion</NavLink></h4>
                </section>
            </div>
            <div className={style.page}>
                <div className={style.header}>
                    <article className={style.nom__user}>
                        Valentin
                    </article>
                </div>
                
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default HomeMenu

