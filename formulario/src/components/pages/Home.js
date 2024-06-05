import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Comprinhas</span></h1>
            <p>Comece a gerenciar suas compras agora mesmo!</p>
            <LinkButton to="/cadastro" text="Adicionar item"/>
        </section>
    )
}

export default Home
