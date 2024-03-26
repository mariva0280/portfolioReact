
export const Habilidades = () => {
    return (
        <section className="skills" id="skills">
            <div className="headings">
                <h2>Skills</h2>
                <div className="divider"></div>
            </div>
            <div className="list-skills">
                <div className="container">
                    <div className="progress less" style={{"--i":100,"--clr":"rgb(255, 121, 4)"}}>
                        <h3>100%</h3>
                        <h4>Spanish</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="progress less" style={{"--i":80,"--clr":"rgb(255, 234, 0)"}}>
                        <h3>80%</h3>
                        <h4>English</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="progress less" style={{"--i":50,"--clr":"rgba(0, 25, 252, 0.3)"}}>
                        <h3>50%</h3>
                        <h4>Html:5</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="progress less" style={{"--i":50,"--clr":"rgba(10, 214, 10)"}}>
                        <h3>50%</h3>
                        <h4>Css</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="progress less" style={{"--i":50,"--clr":"rgba(204, 10, 4)"}}>
                        <h3>50%</h3>
                        <h4>Javascript</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="progress less" style={{"--i":65,"--clr":"rgba(5, 21, 170)"}}>
                        <h3>65%</h3>
                        <h4>Java</h4>
                    </div>
                </div>
            </div>    
        </section>
    )
}