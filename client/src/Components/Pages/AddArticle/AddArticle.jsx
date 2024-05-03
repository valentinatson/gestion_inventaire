import { useState, useEffect } from "react";
import axios from 'axios';
import style from "./AddArticle.module.css";

const AddArticle = () => {
    const [categories, setCategories] = useState([]); // Assurez-vous d'initialiser categories comme un tableau vide

    useEffect(() => {
        axios.get("http://localhost:5000/category/categoryElt")
            .then((res) => {
                setCategories(res.data.category); // Mettez à jour categories avec les données de l'API
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Vérifiez si categories est un tableau avant d'utiliser .map()
    let categoryList;
    if (Array.isArray(categories)) {
        
        categoryList = categories.map((category, indice) => (
            <option key={indice} value={category.name_category}>{category.name_category}</option>
        ));
    } else {
        categoryList = <option value="">Sélectionner une catégorie</option>;
    }

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

        const infoArticle = {
            categorie: categorie,
            nomArticle: nomArticle,
            prixAchat: prixAchat,
            prixVente: prixVente,
        };
        console.log(infoArticle);

        axios.post("http://localhost:5000/article/add", infoArticle)
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
                    <h2>Ajouter un article</h2>
                </section>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.username__field}>
                            <label htmlFor="" id="categorie">Categorie: </label>
                            <select
                                required
                                value={categorie}
                                onChange={(e) => setCategorie(e.target.value)}
                            >
                                categoryList = <option value="">Sélectionner une catégorie</option>;
                                {categoryList}
                            </select>
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="nomArticle">Nom de l'article: </label>
                            <input
                                type="text"
                                id="nomArticle"
                                required
                                value={nomArticle}
                                onChange={(e) => setNomArticle(e.target.value)}
                            />
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="prixAchat">Prix d'achat: </label>
                            <input
                                type="number"
                                id="prixAchat"
                                required
                                value={prixAchat}
                                onChange={(e) => setPrixAchat(e.target.value)}
                            />
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="" id="prixVente">Prix de vente: </label>
                            <input
                                type="number"
                                id="prixVente"
                                required
                                value={prixVente}
                                onChange={(e) => setPrixVente(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={style.btn} >Enrégister</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArticle;

