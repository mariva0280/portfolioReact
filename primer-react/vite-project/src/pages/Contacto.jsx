
export const Contacto = () => {
    return (
        <section className="contact" id="contact">
            <div className="headings">
                <h2>Keep in touch</h2>
                <div className="divider"></div>
            </div>
           
            <div className="container-contact">
            <img src="public/assests/imgs/FotoCV.png.png" alt=""/>
                <div className="contact-form">
                    <h4>Send me a message...</h4>
                    <form>
                        <div className="row">
                            <div className="input-group">
                                <input type="text" id="name" name="name" required validations="required lengthmin nonum"/>
                                <label for="name"><i className="fas fa-user"></i> Your Name</label>
                            </div>
                            <div className="input-group">
                                <input type="tel" id="phone" name="number" required validations="required noletters lengthmax"/>
                                <label for="number"><i className="fas fa-phone-square-alt"></i> Phone no.</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="email" id="email" required validations="required formatmail "/>
                            <label for="email"> <i className="fas fa-envelope"></i> Email id</label>
                        </div>
                        <div className="input-group">
                            <textarea id="message"rows="8" required validations="textlimit"></textarea>
                            <label for="message"><i className="fas fa-comments"></i> Your Message</label>
                        </div>
                        <button id="boton-enviar" type="submit">SUBMIT <i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
                
            </div>
        </section>
    )
}