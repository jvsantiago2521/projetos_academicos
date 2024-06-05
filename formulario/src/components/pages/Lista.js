import { useLocation } from 'react-router-dom'
import Message from "../layout/Message"
import styles from './Lista.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import { useState, useEffect } from 'react'

function Lista() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json', 
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Produtos</h1>
                <LinkButton to="/cadastro" text="Adicionar item"/>
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                    <ProjectCard 
                    id={project.id}
                    name={project.name} 
                    budget={project.budget}
                    marca={project.marca}
                    key={project.id}
                    />
                    ))}
            </Container>
        </div>
    )
}

export default Lista