import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ModalError } from './ModalError';

export const Contacto = () => {

    const [estadoModalError, cambiarEstadoModalError] = useState(false);
    const [estadoModalExito, cambiarEstadoModalExito] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uw2e1vo', 'template_fk3fojc', form.current, '6McGueiO6jE6HW2lT')
        .then((result) => {
            cambiarEstadoModalExito(!estadoModalExito);
        }, (error) => {
            cambiarEstadoModalError(!estadoModalError);
        });
    };

    return(

        <>
        <div id="contacto" className="contacto">

           <form ref={form} onSubmit={sendEmail} className="formulario">
                <h1>Escribinos</h1>
                <input type="text" name="nombre" placeholder="Nombre" required/>
                <input type="email" name="email" placeholder="E-Mail" required/>
                <input type="text" name="telefono" placeholder="Teléfono" required/>
                <textarea type="text" name="mensaje" placeholder="Mensaje" required/>
                <button type="submit">Enviar</button>
           </form>

        </div>

        <ModalError
            estado={estadoModalError}
            cambiarEstado={cambiarEstadoModalError} >
            <p>Surgió un error. No pudo enviarse el mensaje.</p>
        </ModalError>

        <ModalError
            estado={estadoModalExito}
            cambiarEstado={cambiarEstadoModalExito} >
            <p>Enviado exitosamente. Lo contactaremos a la brevedad.</p>
        </ModalError>


        </>
    )
}