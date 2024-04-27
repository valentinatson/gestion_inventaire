import style from "./Signup.module.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"
/* import axios from 'axios' */

const Signup = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("password:", password);

    let infoSignup = {
        name : name,
        password : password,
    }
    console.log(infoSignup);

    /* axios
        .post("http://localhost:5000/user/signup", infoSignup)
        .then((res) => {
                console.log(res.data);
                navigate("/login")
        })
        .catch((error) => {
                console.log(error);
        }); */
  };


    return(
        <div>
            <div className={style.formulaire}>
                <section className={style.title}>
                    <h2>Inscription</h2>
                </section>
                <div className={style.form}>
                    <form  onSubmit={handleSubmit}>
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
                        <div className={style.passwordConfirm__field}>
                            <label htmlFor="" id="passwordConfirm">Confirm your password: </label>
                            <input type="password" id="passwordConfirm" />
                        </div>
                        <div className={style.button}>
                            <button type="submit" >Submit</button>
                        </div>
                        <div className={style.navig}>
                        <h3>j'ai déjà un compte,<NavLink to={"/Login"}> me connecter</NavLink></h3>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Signup