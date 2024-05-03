import { useState, useEffect } from "react";
import axios from 'axios';
import style from "./AddSupply.module.css";

const AddSupply = () => {
    const [articles, setArticles] = useState([]);
    const [nomArticle, setNomArticle] = useState("");
    const [quantite, setQuantite] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/article/articleElt")
            .then((res) => {
                setArticles(res.data.name_article); // Met à jour la liste des articles avec les données de l'API
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("nomArticle:", nomArticle);
        console.log("quantite:", quantite);

        let infoSupply = {
            nomArticle: nomArticle,
            quantite: quantite,
        };
        console.log(infoSupply);

        // Ici, vous pouvez envoyer les données au backend pour traitement

        axios.post("http://localhost:5000/supply/add",infoSupply,{
            headers:{authorization: `BEARER ${localStorage.getItem('token')}`}
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className={style.formulaire}>
                <section className={style.title}>
                    <h2>Approvisionner</h2>
                </section>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.password__field}>
                            <label htmlFor="nomArticle">Nom de l'article: </label>
                            <select
                                required
                                value={nomArticle}
                                onChange={(e) => setNomArticle(e.target.value)}
                            >
                            <option value="">Sélectionner une catégorie: </option>
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
                            <option value="">Sélectionner le nom de l'article: </option>
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
                        <button className={style.btn} type="submit" >Enrégistrer</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSupply;
