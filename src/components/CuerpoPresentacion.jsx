import { useState } from "react";
import { Modal } from "./Modal";



export const CuerpoPresentación = () => {


    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
    const [estadoModal7, cambiarEstadoModal7] = useState(false);
    const [estadoModal8, cambiarEstadoModal8] = useState(false);


    return(

        <>
        <div className="titulo">

            <h1>La protección integral que necesitás</h1>

            <h2>Más de 15 años cuidando tu patrimonio</h2>

        </div>

        <div className="presentacion">

            <div className="tarjeta" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                <div className="circulo">
                    <img src="assets\icons\home.svg"></img>
                </div>
                <h3>Hogar</h3>
            </div>
            <div className="tarjeta" onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                <div className="circulo">
                <img src="assets\icons\car.svg"></img>
                </div>
                <h3>Vehículo</h3>
            </div>
            <div className="tarjeta" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
                <div className="circulo">
                    <img src="assets/icons/family.svg"></img>
                </div>
                <h3>Vida y Salud</h3>
            </div>
            <div className="tarjeta" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
                <div className="circulo">
                    <img src="assets/icons/person.svg"></img>
                </div>
                <h3>Accidentes Personales</h3>
            </div>
            <div className="tarjeta" onClick={() => cambiarEstadoModal5(!estadoModal5)}>
                <div className="circulo">
                    <img src="assets/icons/boat.svg"></img>
                </div>
                <h3>Cascos</h3>
            </div>
            <div className="tarjeta" onClick={() => cambiarEstadoModal6(!estadoModal6)}>
                <div className="circulo">
                    <img src="assets/icons/business.svg"></img>
                </div>
                <h3>Empresas</h3>
            </div>
            <div className="tarjeta" onClick={() => cambiarEstadoModal7(!estadoModal7)}>
                <div className="circulo">
                    <img src="assets/icons/tractor.svg"></img>
                </div>
                <h3>Agro</h3>
            </div>
            <div className="tarjeta" onClick={() => cambiarEstadoModal8(!estadoModal8)}>
                <div className="circulo">
                    <img src="assets/icons/art.svg"></img>
                </div>
                <h3>ART</h3>
            </div>

        </div>

            {/* Hogar */}
            <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1} >
                <p>Asegurá tu casa, departamento o vivienda en country ante cualquier imprevisto. Podes asegurar tu vivienda permanente o transitoria, con distintos planes que se ajusten a tus necesidades.</p>
            </Modal>

            {/* Vehiculo */}
            <Modal
                estado={estadoModal2}
                cambiarEstado={cambiarEstadoModal2} >
                <p>Contamos con una amplia variedad de coberturas para vehículos, adaptándose a tus necesidades, para que disfrutes de manejar sabiendo que estás protegido.</p>
            </Modal>

            {/* Vida */}
            <Modal
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3} >
                <p>Te ofrecemos estos seguros para cuidar tu salud y la tranquilidad de tu familia ante las contingencias de la vida.</p>
            </Modal>

            {/* Accidentes */}
            <Modal
                estado={estadoModal4}
                cambiarEstado={cambiarEstadoModal4} >
                <p>Asegurá tu servicio doméstico y afines, trabajadores independientes y/o profesionales y contratistas. Brindamos coberturas específicas para cubrir necesidades personales y de empresas.</p>
            </Modal>

            {/* Cascos */}
            <Modal
                estado={estadoModal5}
                cambiarEstado={cambiarEstadoModal5} >
                <p>Esta cobertura comprende embarcaciones de uso particular y placer, con una amplia gama de coberturas entre ellas asistencia y remolque.</p>
            </Modal>

            {/* Empresas */}
            <Modal
                estado={estadoModal6}
                cambiarEstado={cambiarEstadoModal6} >
                <p>Asesoramiento integral para empresas, incluyendo todos los riesgos a los cuales las mismas pueden estar expuestas. Mediante un análisis previo se define cuáles son los seguros necesarios.</p>
            </Modal>

            {/* Agro */}
            <Modal
                estado={estadoModal7}
                cambiarEstado={cambiarEstadoModal7} >
                <p>Distintas coberturas para el productor agropecuario acorde a sus necesidades. Cultivos. Ganado. Patrimonio. Empleados.</p>
            </Modal>

            {/* ART */}
            <Modal
                estado={estadoModal8}
                cambiarEstado={cambiarEstadoModal8} >
                <p>El sistema de ART previene los riesgos laborales y repara los daños ocasionados por accidentes de trabajo, in itinere y enfermedades profesionales.</p>
            </Modal>
        
        </>
    )
}