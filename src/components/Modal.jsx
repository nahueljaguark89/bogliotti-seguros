

export const Modal = ({
    children,
    estado,
    cambiarEstado
}) => {
  return (
    <>
        {estado &&
            <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => cambiarEstado(false)}>&times;</span>
                        {children}
                        <a href="#contacto" onClick={() => cambiarEstado(false)}><button>Más Información</button></a>
                    </div>
            </div>
        }
    </>
  )
}
