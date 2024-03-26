

export const Estudios = () => {
    return (
        <section className="studies" id="studies">
            <div className="headings">
                <h2>Studies</h2>
                <div className="divider"></div>
            </div>
            <div className="list_studies">
                <ul>
                    <li style={{"--accent-color" : "#41516C"}}>
                        <div className="date">2024 - Actualidad</div>
                        <div className="title">Bootcamp RuralHack</div>
                        <div className="desc">Bootcamp con tres modulos diferenciados, Modulo Front-End (HTML,CSS,JavaScript,React, Next), Modulo Back-End y Modulo de Api's</div>
                    </li>
                    <li style={{"--accent-color" : "#FBCA3E"}}>
                        <div className="date">Ene 2023 - Dic 2023</div>
                        <div className="title">Curso Desarrollo de Software Profesional</div>
                        <div className="desc">Desarrollo Back-End, Java, Programacion Estructurada, Programación Orientada a Objetos, API-REST, SpringBoot</div>  
                    </li>
                    <li style={{"--accent-color" : "#E24A68"}}>
                        <div className="date">Marz 2020 - Nov 2020</div>
                        <div className="title">Bootcamp Bottega</div>
                        <div className="desc">Desarrollor Front-End, HTML, CSS, JavaScript</div>
                    </li>
                    <li style={{"--accent-color" : "#1B5F8C"}}>
                        <div className="date">Sept 2000 - Jun 2001</div>
                        <div className="title">Secretariado de Dirección</div>
                        <div className="desc">Facturación, Contabilidad</div>
                    </li>
                    <li style={{"--accent-color" : "#4CADAD"}}>
                        <div className="date">Sept 1994 - Jun 1999</div>
                        <div className="title">Bachillerato</div>
                        <div className="desc">Titulo de Bachillerato</div>
                    </li>
                </ul>
            </div>
        </section>
    )
}