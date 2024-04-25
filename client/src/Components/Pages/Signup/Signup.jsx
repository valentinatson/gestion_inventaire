import style from "./Signup.module.css"


const Signup = () => {
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
                        <div className={style.passwordConfirm__field}>
                            <label htmlFor="" id="passwordConfirm">Confirm your password: </label>
                            <input type="password" id="passwordConfirm" />
                        </div>
                        <div className={style.button}>
                            <button type="submit" >Submit</button>
                        </div>
                        <div className={style.navig}>
                            Already a member, SE CONNECTER
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Signup