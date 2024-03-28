
export const Home = () => {
    return (
        <div className="aboutme">
            <div className="info">

                <h1>I'm <span>Vanessa</span> Fernández</h1>
                <p>
                    Profesional con más de veinte años de experiencia laboral en distintos sectores.
                    Siempre he sido una apasionada del sector IT, dicha pasión hace que comience a formarme
                    en dicho sector, al que por distintas circunstancias nunca hasta este momento he podido formarme en él.
                    Comencé haciendo un curso de desarrollo front-end tocando diversos lenguajes como HTML, CSS, este
                    primer contacto me lleva a interesarme por el desarrollo back-end y decido hacer un curso
                    de desarrollo profesional desde cero con el lenguaje Java, empezando con programación estructurada,
                    pasando por programación orientada a objetos, para finalizar con API-REST, usando tecnologías como
                    SpringBoot,Spring JPA, Hibernate y bases de datos SQL.
                    Actualmente sigo con mi formación haciendo un bootcamp de desarrollo front-end, back-end y Api's.
                    En estos momentos me encuentro en pleno proceso de reciclaje para poder dedicarme profesionalmente
                    al sector IT.
                    Mi carrera laboral comenzó como auxiliar administrativo, tras varios años desarrollándome y creciendo
                    laboralmente en este sector decido montar mi propio negocio.
                    Me considero una persona inquieta de hecho es esa inquietud la que me hace estar continuamente
                    aprendiendo nuevas aptitudes y conocimientos.
                </p>
            </div>
            <div className="imagen">
                <img src="./public/assests/imgs/FotoCV.png.png" alt="imagen" />
            </div>
            <section className="experience" id="experiences">
            <div className="headings">
                <h2>Experience</h2>
                <div className="divider"></div>
            </div>
            <div className="list_experiences">
                <ul>
                    <li style={{"--accent-color" : "#41516C"}}>
                        <div className="date">Oct 2020 - Actualidad</div>
                        <div className="title">Vendedor</div>
                        <div className="desc">Proporcionar un excelente servicio al cliente y atender sus consultas e inquietudes</div>
                    </li>
                    <li style={{"--accent-color" : "#FBCA3E"}}>
                        <div className="date">Feb 2006 - Actualidad</div>
                        <div className="title">Propietario pequeña empresa</div>
                        <div className="desc">Gestión de todos los aspectos del negocio, incluyendo el servicio al cliente,las ventas, el marketing y la gestión financiera</div>  
                    </li>
                    <li style={{"--accent-color" : "#E24A68"}}>
                        <div className="date">Ene 2002 - Ene 2006</div>
                        <div className="title">Auxiliar administrativo</div>
                        <div className="desc">Tareas propias del puesto, facturación,contabilidad, recepción y programación de mercancias, atención al cliente</div>
                    </li>
                </ul>
            </div>
            </section>
        </div>
                
    )
}