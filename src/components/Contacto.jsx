import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {



    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uw2e1vo', 'template_fk3fojc', form.current, '6McGueiO6jE6HW2lT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(

        <>
        <div id="contacto" className="contacto">

           <form ref={form} onSubmit={sendEmail} className="formulario">
                <h1>Escribinos</h1>
                <input type="text" name="nombre" placeholder="Nombre"/>
                <input type="text" name="email" placeholder="E-Mail" />
                <input type="text" name="telefono" placeholder="Teléfono" />
                <input type="text" name="mensaje" placeholder="Mensaje" />
                <button type="submit">Enviar</button>
           </form>

        </div>


        </>
    )
}