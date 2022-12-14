import {Container} from '../components/Container';
import styles from '../styles/components/containers.modules.css'

export function Containers () {
    return (

        <div className="container">
            <div className="containerTitle">
                <h1>Favoritos</h1>
            </div>
            
            <div className="favoritos">
                <div >    
                    <Container 
                        title="To do list"
                        imgPath="https://media.giphy.com/media/jDZKzi6LsNqBUj3GfN/giphy.gif"
                        description="Uma aplicação em JavaScript para fazer uma lista de tarefas"
                        link="https://lista-tarefas-angel.netlify.app/"
                    />
                </div>
                <div>
                    <Container 
                        title="Mulheres na programação"
                        imgPath="https://media.giphy.com/media/l44QiZECjPEjLAwzm/giphy.gif"
                        description="Site desenvolvido com informações sobre mulheres importantes na programação"
                        link="https://mulheres-importantes-na-programacao.netlify.app/"
                    />
                </div>
                <div>
                    <Container 
                        title="Dicionário da Programação"
                        imgPath="https://media.giphy.com/media/t3sZxY5zS5B0z5zMIz/giphy-downsized-large.gif"
                        description="Lista de alguns elementos e algumas linguagens necessárias voltadas para a programação"
                        link="https://angelegito.github.io/dicionario_da_programacao/"
                    />
                </div>
            </div>
        </div>
    );
}