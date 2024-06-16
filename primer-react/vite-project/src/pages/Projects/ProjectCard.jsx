import React from "react"
import styles from './ProjectCardStyles.module.css'

function ProjectCard({ src, link, title, shortDescription, summary, isEven }) {
  return (
    <div className={`${styles.projectCard} ${isEven ? styles.even : styles.odd}`}>
      <a href={link} target='_blank' rel='noopener noreferrer' className={styles.imageWrapper}>
        <img className={`${styles.projectImage} hover`} src={src} alt={`${title} logo`} />
      </a>
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.shortDescription}>{shortDescription}</p>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
}

export default ProjectCard







