import { useEffect, useInsertionEffect, useState } from 'react'
import Axios from 'axios'
import styles from '../styles/components/lista.modules.css'

export const Lista = () => {
    const [codigos, setCodigos] = useState([])

    useEffect(() => {     
        console.log("Componentes montados");
        async function pegaDados() {
            const resposta = await Axios.get("https://api.github.com/users/AngelEgito/repos");
            setCodigos(resposta.data)
        }
        pegaDados()

    }, [])
    
    return (
        <div className="repositorio">
            <h2 className="repoTitle">
                Repositórios no GitHub
            </h2>
            <div className="cardsRepoContainer">
                <div className="cardsRepo">
                    {codigos.map(codigo => {
                        return(
                            <div className="cardRepo">
                                <p id={codigo.name}>{codigo.name}</p>
                                <a className="cardRepoLink" href={codigo.html_url} target="_blank">Ver</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}