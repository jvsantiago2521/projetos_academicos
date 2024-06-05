import { useNavigate } from 'react-router-dom'

import CadastroForm from '../project/CadastroForm'
import styles from './Cadastro.module.css'

function Cadastro() {

    const navigate = useNavigate()

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            navigate('/lista', { state: { message: 'Produto cadastrado com sucesso!' } })
          })
          .catch((err) => console.log(err))
    }

    return (
        <div className={styles.cadastro_container}>
            <h1>Cadastrar Produto</h1>
            <p>Cadastre seu produto na lista de produtos</p>
            <CadastroForm handleSubmit={createPost} btnText="Cadastrar Produto"/>
        </div>
    )
}

export default Cadastro