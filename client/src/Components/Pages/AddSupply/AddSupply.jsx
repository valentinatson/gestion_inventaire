




import style from "./AddSupply.module.css"


const AddSupply = () => {
    return(
        <div>
            <div className={style.formulaire}>
                <section className={style.title}>
                    <h2>Supply Register</h2>
                </section>
                <div className={style.form}>
                    <form action="" method="">
                        <div className={style.username__field}>
                            <label htmlFor="" id="categorie">Categorie: </label>
                            <select required>
                            <option value="" >Sélectionner une catégorie</option>
                                <option value="Table">Table</option>
                                <option value="Chaise">Chaise</option>
                                <option value="Lit">Lit</option>
                            </select>
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="nomArticle">Nom de l'article: </label>
                            <select required>
                            <option value="" >Sélectionner le nom de l'article: </option>
                                <option value="Table1">Table rond</option>
                                <option value="Table1">Table basse</option>
                                <option value="Chaise1">Chaise large</option>
                                <option value="Chaise1">Chaise basse</option>
                                <option value="Lit1">Lit 2 place</option>
                                <option value="Lit1">Lit 3 place</option>
                            </select>
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="quantité">Quantité: </label>
                            <input type="number" id="quantité" required/>
                        </div>
                       
                        
                        <div className={style.button}>
                            <button type="submit" >Submit</button>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}
export default AddSupply