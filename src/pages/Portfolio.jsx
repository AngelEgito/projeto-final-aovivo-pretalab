import { Header } from '../components/Header'
import { Lista } from '../components/Lista'
import { Containers } from '../components/Containers'
import portfolioImg from '../assets/portfolio2.svg'


export function Portfolio() {
    return(
        <>
            <Header text="Projetos" image={portfolioImg} />
            <Containers />
            <Lista />
        </>
    )
}
