import styles from './ProjectCard.module.css'
import {Link} from 'react-router-dom'


function ProjectCard({ id, name, budget, marca, handleRemove }){
    return (
      <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
            <span>Valor:</span>R${budget}
        </p>
        <p className={styles.category_text}>
            <span></span>{marca}
        </p>
      </div>  
    )
}

export default ProjectCard