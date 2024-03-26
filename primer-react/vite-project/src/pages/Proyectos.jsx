
export const Proyectos = () => {
    return (
            <section className="projects" id="projects">
            <div className="headings">
                <h2>My Projects</h2>
                <div className="divider"></div>
            </div>
            <div className="container">
                <article className="project-card">
                    <a href="https://github.com/mariva0280/CitasHospital" target="_blank">
                      <div className="top-info-project">
                        <img src="public/assests/imgs/computer.jpg" alt="Logo" />
                        <div className="technologies">
                          <ul>
                            <li>Java</li>
                            <li>SrpingBoot</li>
                          </ul>
                        </div>
                      </div>
                    </a>
                    <h3>Gestion Citas</h3>
                    <p>Sistema gestión citas hospitalarias</p>
                  </article>
                  <article className="project-card">
                    <a href="https://github.com/mariva0280/vehiculos" target="_blank">
                      <div className="top-info-project">
                        <img src="public/assests/imgs/computer.jpg" alt="Logo" />
                        <div className="technologies">
                          <ul>
                            <li>Java (POO)</li>
                          </ul>
                        </div>
                      </div>
                    </a>
                    <h3>Gestion Concesionario</h3>
                    <p>Sistema gestión concesionario</p>
                  </article>
                  <article className="project-card">
                    <a href="https://github.com/mariva0280/Challenge" target="_blank">
                      <div className="top-info-project">
                        <img src="public/assests/imgs/computer.jpg" alt="Logo" />
                        <div className="technologies">
                          <ul>
                            <li>Html</li>
                            <li>Css</li>
                            <li>React</li>
                            <li>Java</li>
                            <li>SrpingBoot</li>
                          </ul>
                        </div>
                      </div>
                    </a>
                    <h3>Gestion invitados</h3>
                    <p>Sistema gestión lista invitados</p>
                  </article>
            </div>  
        </section>
    )    
}