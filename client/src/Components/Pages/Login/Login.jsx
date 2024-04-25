


import style from "./Login.module.css"


const Login = () => {
    return(
        <div>
            <div className={style.formulaire}>
                <section className={style.title}>
                    <h2>Inscription</h2>
                </section>
                <div className={style.form}>
                    <form action="" method="">
                        <div className={style.username__field}>
                            <label htmlFor="" id="username">Username: </label>
                            <input type="text" id="username" />
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="password">Password: </label>
                            <input type="password" id="password" />
                        </div>
                        
                        <div className={style.button}>
                            <button type="submit" >Submit</button>
                        </div>
                        <div className={style.navig}>
                            Not a member, S'INSCRIRE
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Login