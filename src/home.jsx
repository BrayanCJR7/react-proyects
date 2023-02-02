import {Nav} from "./Components/nav";
import {useDocumentTitle} from './useDocumentTitle'
import {ReusableTabPages, TabPages} from "./Components/TabPages";
import {Tags} from "./Components/tags";

const Home = () => {
    useDocumentTitle('Home')
    return (
        <>
            <section className="home">
                <Nav/>
                <TabPages/>
                <ReusableTabPages tabNames={["contenido dinamico", "tab2", "tab-3"]}>
                    <div>Cambio de pestañas con un componente reutilizable</div>
                    <div>Se pueden agregar los botones que se quieran, pero se deben agregar la misma cantidad de
                        "div"
                    </div>
                    <div></div>
                </ReusableTabPages>
                <Tags/>
            </section>
        </>
    )
}
export {Home}