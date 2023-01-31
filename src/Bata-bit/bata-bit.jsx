import {useDocumentTitle} from '../useDocumentTitle'
import './bata-bit.css'
import {HomeBata} from "./components/home-bata";
import {MonedaBata} from "./components/moneda-bata";

export const BataBit = () => {
    useDocumentTitle('Bata bit')
    return (
        <>
            <main className="main-bata">
                <HomeBata/>
                <MonedaBata/>
                <section>Descripcion del producto</section>
                <section>Conocelo hoy</section>
                <section>Escoje un plan</section>
            </main>
            <footer>Footer</footer>
        </>
    )
}