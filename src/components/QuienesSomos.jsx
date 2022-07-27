export const QuienesSomos = () => {
    return(

        <>
        <div className="qsomos-imagenes">

            <img src="assets\images\img-auto.jpg"></img>
            <img src="assets\images\img-familia.jpg"></img>
            <img src="assets\images\img-living.jpg"></img>

        </div>

        
        <div id="qsomos" className="qsomos">
            
            <div className="qsomos-parrafo">
                <hr/>
                <h1>Sobre Nosotros</h1>
                <p>Más de 15 años cuidando tu patrimonio.</p>
                <p>Trabajamos con las mejores aseguradoras para brindarte el mejor servicio, acompañándote en todo el proceso.</p>
                <br/>
            </div>
            <div className="qsomos-datos">
                <ul>
                    <li>Av. Int. Varela 332, Campana. <img src="assets/icons/pin.svg"></img><a href="#mapa">Ver mapa</a></li>
                    <li>Horario: Lunes a Viernes de 9 a 16 hs.</li>
                    <li>Tel: 3489 340922</li>
                    <li>administracion@bogliottiseguros.com.ar</li>
                </ul>       
           </div>


        </div>

        </>
    )
}