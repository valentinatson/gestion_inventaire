import axios from 'axios'
import { useState } from "react"
import { NavLink } from "react-router-dom"


import style from "./Login.module.css"


const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("password:", password);

    let infoLogin = {
        name : name,
        password : password,
    }
    console.log(infoLogin);

    axios
        .post("http://localhost:5000/user/login", infoLogin)
        .then((res) => {
                console.log(res.data);
                window.location.href = "/ProtectedRoutes/";
                window.localStorage.setItem('token', res.data.accessToken)
                // Après une connexion réussie, stockez le nom d'utilisateur dans localStorage
                localStorage.setItem('name', name); // Supposons que 'username' soit le nom d'utilisateur connecté

                

        })
        .catch((error) => {
                console.log(error);
        });
};


    return(
        <div className={style.body}>
            <div className={style.formulaire}>
                <section className={style.title}>
                    <h2>Connection</h2>
                </section>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.username__field}>
                            <label htmlFor="" id="username">Username: </label>
                            <input type="text" id="username" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="password">Password: </label>
                            <input type="password" id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <div className={style.button}>
                            <button type="submit" >Submit</button>
                        </div>
                        <div className={style.navig}>
                            <h3>j'ai déjà un compte,<NavLink to={"/Signup"}> m'inscrire</NavLink></h3>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Login

