import axios from 'axios';
import { useEffect, useState } from "react";
import style from "./AddSell.module.css";

const AddSell = () => {
    const [articles, setArticles] = useState([]);
    const [nomArticle, setNomArticle] = useState("");
    const [quantite, setQuantite] = useState("");
    

    useEffect(() => {
        // articles depuis l'API
        axios.get("http://localhost:5000/article/articleElt",{
            headers:{ Authorization:"sell articles"}
        })
            .then((res) => {
                setArticles(res.data.name_article);
            })
            .catch((error) => {
                console.log(error);
            });

        
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("nomArticle:", nomArticle);
        console.log("quantite:", quantite);

        let infoSell = {
            nomArticle: nomArticle,
            quantite: quantite,
        };
        console.log(infoSell);
        
    };

    const handleAddSell = () => {
        
        const infoSell = {
            nomArticle: nomArticle,
            quantite: quantite,
        };

        axios.post("http://localhost:5000/sell/add",infoSell,{
            headers:{authorization: `BEARER ${localStorage.getItem('token')}`}
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
            /* fetch(
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    authorization:{``${localStorage.getItem()}`}
                }
            ) */
        
            
    };

    
    return (
        <div>
            <div className={style.formulaire}>
                <section className={style.title}>
                    <h2>Enrégistrer une vente</h2>
                </section>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.password__field}>
                            <label htmlFor="nomArticle">Nom de l'article: </label>
                            <select
                                id="nomArticle"
                                required
                                value={nomArticle}
                                onChange={(e) => setNomArticle(e.target.value)}
                            >
                                <option value="">Sélectionner le nom de l'article: </option>
                                {articles.map((name_article, index) => (
                                    <option key={index} value={name_article.name_article}>{name_article.name_article}</option>
                                ))}
                            </select>
                        </div>
                        <div className={style.password__field}>
                            <label htmlFor="quantite">Quantité: </label>
                            <input
                                type="number"
                                id="quantite"
                                required
                                value={quantite}
                                onChange={(e) => setQuantite(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={style.btn}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSell;
