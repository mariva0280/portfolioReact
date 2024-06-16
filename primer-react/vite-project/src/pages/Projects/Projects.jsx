import React from 'react'
import styles from './ProjectsStyles.module.css'
import projectData from './ProjectData'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.id}
            src={project.image}
            link={project.githubLink}
            title={project.title}
            shortDescription={project.shortDescription}
            summary={project.summary}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects







