


import style from "./AddArticle.module.css"


const AddArticle = () => {
    return(
        <div>
            <div className={style.formulaire}>
                <section className={style.title}>
                    <h2>Article Register</h2>
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
                            <input type="text" id="nomArticle" required/>
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="prixAchat">Prix d'achat: </label>
                            <input type="number" id="prixAchat" required/>
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="prixVente">Prix de vente: </label>
                            <input type="number" id="prixVente" required/>
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
export default AddArticle