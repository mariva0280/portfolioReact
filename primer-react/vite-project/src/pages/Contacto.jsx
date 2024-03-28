import { useState } from "react"
export const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
        setErrors({...errors, [name]:""})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}

         // validación campos obligatorios
        for( const key in formData) {
            if(formData[key].trim()===''){
                newErrors[key]='Campo obligatorio'
            }
        }
        // validación name, min length y no admite numeros
        if(formData.name.trim().length < 3 ){
            newErrors.name = 'No se admiten menos de tres carácteres'
        } else if (!/^[a-zA-Z]+$/.test(formData.name.trim())){
            newErrors.name = 'No se admiten números'
        }
        //validacion phone  max length y no letters
        if(formData.phone.length < 7 || formData.phone.length > 12) {
            newErrors.phone = 'Insertar entre 7 o 12 numeros'
        } else if(!/^[0-9]+$/.test(formData.phone)){
            newErrors.phone = 'No se admiten letras'     
        }
        //validación email formato email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailPattern.test(formData.email.trim())){
            newErrors.email = 'Email invalido'
        }
        //validar length max de message
        if(formData.message.trim().length >240 ) {
            newErrors.message = 'El mensaje no puede tener más de 240 caracteres'
        }
        
        // actualizar el estado de los errores
        setErrors(newErrors)
        // si no hay errores, enviar el formulario
        if(Object.keys(newErrors).length === 0) {
            console.log('Formulario enviado')
            setFormData({
                name:'',
                phone:'',
                email:'',
                message:''
            })
        }
    }
    const handleClearError = (name) => {
        setErrors({...errors,[name]:""})
    }
    
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
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-group">
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                                {errors.name &&(
                                    <span className="msg-error">
                                        {errors.name}
                                        <span className="close-icon" onClick={()=>handleClearError("name")}>
                                            x
                                       </span>     
                                    </span>)}
                                <label htmlFor="name"><i className="fas fa-user"></i> Your Name</label>
                            </div>
                            <div className="input-group">
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
                                {errors.phone &&( 
                                    <span className="msg-error">
                                        {errors.phone}
                                        <span className="close-icon" onClick={()=>handleClearError("phone")}>
                                            x
                                        </span>
                                    </span>)}
                                <label htmlFor="number"><i className="fas fa-phone-square-alt"></i> Phone no.</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                            {errors.email &&( 
                                <span className="msg-error">
                                    {errors.email}
                                   <span className="close-icon" onClick={()=>handleClearError("email")}>
                                        x
                                    </span> 
                                </span>)}
                            <label htmlFor="email"> <i className="fas fa-envelope"></i> Email id</label>
                        </div>
                        <div className="input-group">
                            <textarea id="message"rows="8" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            {errors.message && <span className="msg-error">{errors.message}</span>}
                            <label htmlFor="message"><i className="fas fa-comments"></i> Your Message</label>
                        </div>
                        <button id="boton-enviar" type="submit">SUBMIT <i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
                
            </div>
        </section>
    )
}