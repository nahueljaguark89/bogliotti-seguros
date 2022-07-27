

export const ModalError = ({
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
                    </div>
            </div>
        }
    </>
  )
}
