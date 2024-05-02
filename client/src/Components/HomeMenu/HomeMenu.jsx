import style from "./HomeMenu.module.css"
import { Outlet, useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import deconnexion from "../../Assets/icon/enter.png"
/* import Home from "../Pages/Home/Home" */
/* import logo from "../../Assets/Pictures/logo.jpg" */


const HomeMenu = () => {

    const [name, setName] = useState('');
    const navigate = useNavigate(); // Hook de réaction pour la navigation

    useEffect(() => {
        // Récupérez le nom d'utilisateur depuis localStorage lors du chargement de la page
        const storedName = localStorage.getItem('name');
        setName(storedName || ''); // Si aucun nom d'utilisateur n'est stocké, définissez-le comme une chaîne vide
    }, []);

    // Fonction pour gérer la déconnexion de l'utilisateur
    const handleLogout = () => {
        // Supprimer l'access token de localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        // Rediriger l'utilisateur vers la page de connexion
        navigate('/Login');
    };

    return (
        <div className={style.container}>
            <div className={style.sideBar}>
                <section className={style.logo__nom}>
                    {/* <img src={logo} className={style.logo} alt="logo" /> */}
                    <h2 className={style.title}>StockHub</h2>
                </section>
                <section>
                    <h4 className={style.h} ><NavLink to={"/ProtectedRoutes/"}>Article List</NavLink></h4>
                </section>
                <section>
                    <h4 className={style.h} ><NavLink to={"/ProtectedRoutes/PageSell"}>Sell</NavLink></h4>
                </section>
                <section>
                    <h4 className={style.h} ><NavLink to={"/ProtectedRoutes/PageSupply"}>Supply</NavLink></h4>
                </section>
                <section>
                    <h4 className={style.h} ><NavLink to={"/ProtectedRoutes/PageInventaire"}>Inventaire</NavLink></h4>
                </section>
                <section>
                    <h4  className={style.h}  onClick={handleLogout}> <NavLink to=""> {/* <img className={style.icon__deconnexion} src={deconnexion} alt="" srcset="" /> */} Déconnexion</NavLink> </h4> 
                </section>
            </div>
            <div className={style.page}>
                <div className={style.header}>
                    <article className={style.nom__user}>
                        {name}
                    </article>
                </div>

                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default HomeMenu;
