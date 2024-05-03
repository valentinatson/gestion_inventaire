import { useState } from "react"
import { NavLink } from "react-router-dom"
/* import axios from 'axios' */



import style from "./AddSell.module.css"


const AddSell = () => {

    const [categorie, setCategorie] = useState("");
    const [nomArticle, setNomArticle] = useState("");
    const [quantite, setQuantite] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("categorie:", categorie);
    console.log("nomArticle:", nomArticle);
    console.log("quantite:", quantite);
    

    let infoSell = {
        categorie : categorie,
        nomArticle : nomArticle,
        quantite : quantite,
    }
    console.log(infoSell);

    /* axios
        .post("http://localhost:5000/user/infoSell", infoSell)
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
                    <h2>Enrégistrer une vente</h2>
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
                            <select required
                            value={nomArticle}
                            onChange={(e) => setNomArticle(e.target.value)}
                            >
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
                            <input type="number" id="quantité" required
                            value={quantite}
                            onChange={(e) => setQuantite(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={style.btn}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddSell