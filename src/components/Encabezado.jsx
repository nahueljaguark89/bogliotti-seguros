import { useEffect, useState } from "react";

    

export const Encabezado = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);


    const handleToggleMenu = () => {
        setNavbarOpen(prev => !prev);
    }

    

    return(
        <>

            <div className="menu-boton" >
                    
                <a id="menu_on" onClick={handleToggleMenu} className={`menuNav ${navbarOpen ? "visible_menu" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

            </div>

            <div className="encabezado">

                <div className="encabezado-foto">
            
                </div>

                <div className="encabezado-logo">
                    <img src="assets/images/logo-blanco.png"></img>
                </div>

                

            </div>


            <div className={`menuNav ${navbarOpen ? "visible_menu" : ""}`}>
                <nav >	
                    <div id="close_menu" onClick={ handleToggleMenu } >
                        &times;
                    </div>
                    <ul>
                        <li><a href="#" onClick={handleToggleMenu} >Inicio</a></li>
                        <li><a href="#siniestros" onClick={handleToggleMenu} >Siniestros</a></li>
                        <li><a href="#qsomos" onClick={handleToggleMenu} >Quienes Somos</a></li>
                        <li><a href="#contacto" onClick={handleToggleMenu} >Contacto</a></li>
                        <li><a href="https://www.instagram.com/ferbogliottiseguros/" target="blank" ><i className="fa-brands fa-instagram"></i></a> <a href="https://www.facebook.com/fernandabogliottiseguros" target="blank"><i className="fa-brands fa-facebook-square"></i></a></li>
                    </ul>
                </nav>

            </div>

        </>
    )
}