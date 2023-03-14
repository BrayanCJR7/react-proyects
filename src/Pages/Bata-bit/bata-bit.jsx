import {useDocumentTitle} from '../../useDocumentTitle'
import './bata-bit.css'
import {HomeBata} from "./components/home-bata";
import {MonedaBata} from "./components/moneda-bata";
import {DescriptionBata} from "./components/description-bata";
import {Conocelo} from "./components/conocelo";
import {Footer} from "./components/footer";
import {Planes} from "./components/planes";

export const BataBit = () => {
    useDocumentTitle('Bata bit')
    return (
        <>
            <main className="main-bata">
                <HomeBata/>
                <MonedaBata/>
                <DescriptionBata/>
                <Conocelo/>
                <Planes/>
            </main>
            <Footer/>
        </>
    )
}