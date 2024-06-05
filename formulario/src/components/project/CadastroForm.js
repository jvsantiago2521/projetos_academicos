import {useState} from 'react'

import styles from './CadastroForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function CadastroForm({handleSubmit, btnText, projectData}){

    const [project, setProject] = useState(projectData || {})

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do produto"
                name="name"
                placeholder="Insira o nome do produto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type="number"
                text="Preco do produto"
                name="budget"
                placeholder="Insira o preco do produto"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Input 
                type="text"
                text="Marca do produto"
                name="marca"
                placeholder="Insira a marca do produto"
                handleOnChange={handleChange}
                value={project.marca ? project.marca : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default CadastroForm