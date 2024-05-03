import { useState } from "react"
import { NavLink } from "react-router-dom"
/* import axios from 'axios' */


import style from "./AddArticle.module.css"


const AddArticle = () => {


    const [categorie, setCategorie] = useState("");
    const [nomArticle, setNomArticle] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("categorie:", categorie);
    console.log("nomArticle:", nomArticle);
    console.log("prixAchat:", prixAchat);
    console.log("prixVente:", prixVente);
    

    let infoArticle = {
        categorie : categorie,
        nomArticle : nomArticle,
        prixAchat : prixAchat,
        prixVente : prixVente,
    }
    console.log(infoArticle);

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
                    <h2>Ajouter un article</h2>
                </section>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.username__field}>
                            <label htmlFor="" id="categorie">Categorie: </label>
                            <select required
                            value={categorie}
                            onChange={(e) => setCategorie(e.target.value)}
                            >
                            <option value="" >Sélectionner une catégorie</option>
                                <option value="Table">Table</option>
                                <option value="Chaise">Chaise</option>
                                <option value="Lit">Lit</option>
                            </select>
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="nomArticle">Nom de l'article: </label>
                            <input type="text" id="nomArticle" required
                            value={nomArticle}
                            onChange={(e) => setNomArticle(e.target.value)}
                            />
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="prixAchat">Prix d'achat: </label>
                            <input type="number" id="prixAchat" required
                            value={prixAchat}
                            onChange={(e) => setPrixAchat(e.target.value)}
                            />
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="prixVente">Prix de vente: </label>
                            <input type="number" id="prixVente" required
                            value={prixVente}
                            onChange={(e) => setPrixVente(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={style.btn} >Enrégister</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default AddArticle