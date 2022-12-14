import { Header } from '../components/Header'
import { HeaderSobre } from '../components/HeaderSobre'
import sobre from '../assets/sobre2.svg'
import sobreMim from '../assets/sobre_mim.jpeg'


export function Sobre() {
    return(
        <>
            <Header text="Minha Trajetória" image={sobre} />
            <HeaderSobre imagem={sobreMim} text="Angélica Egito, prazer!" description="Sou Pernambucana, moro em Olinda, tenho 33 anos, meu foco atual é o front end, estou em migração de carreira para área de tecnologia. Estudando desde 2021 a área da programação, participei de alguns ciclos formativos como o da Pretalab, Programaria entre outros, me inteirando sobre HTML, CSS, JavaScript e mais recentemente React tendo em vista me tornar uma desenvolvedora full stack e desbravar o mercado. " />
            
        </>
    )
}