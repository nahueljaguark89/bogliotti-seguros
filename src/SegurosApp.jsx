import { Contacto } from "./components/Contacto"
import { CuerpoPresentación } from "./components/CuerpoPresentacion"
import { Encabezado } from "./components/Encabezado"
import { Menu } from "./components/Menu"
import { Pie } from "./components/Pie"
import { QuienesSomos } from "./components/QuienesSomos"


export const SegurosApp = () => {
    return (
        <>
            <Encabezado />
            <Menu />
            <CuerpoPresentación />
            <QuienesSomos />
            <Contacto />
            <Pie />
        </>
    )
}