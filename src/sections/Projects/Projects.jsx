import styles from '../Projects/ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
    <h1 className='sectionTitle' >Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={viberr} 
        link = "https://skharry-astroblog.netlify.app/" 
        h3="Viberr" 
        p="A Blogging platform"
        />
        <ProjectCard 
        src={viberr} 
        link = "https://skharry-astroblog.netlify.app/" 
         h3="Viberr" 
        p="A Blogging platform" />
        
         <ProjectCard 
         src={viberr} 
         link = "https://skharry-astroblog.netlify.app/" 
          h3="Viberr" 
          p="A Blogging platform"
         />
    </div>
    </section>
  )
}

export default Projects