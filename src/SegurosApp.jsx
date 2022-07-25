import { Contacto } from "./components/Contacto"
import { CuerpoPresentación } from "./components/CuerpoPresentacion"
import { Encabezado } from "./components/Encabezado"
import { Pie } from "./components/Pie"
import { QuienesSomos } from "./components/QuienesSomos"
import { Siniestros } from "./components/Siniestros"


export const SegurosApp = () => {
    return (
        <>
            <Encabezado />
            <CuerpoPresentación />
            <Siniestros />
            <QuienesSomos />
            <Contacto />
            <Pie />
        </>
    )
}