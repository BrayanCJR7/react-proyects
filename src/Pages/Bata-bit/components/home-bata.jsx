import '../bata-bit.css'
import {PatataIcon} from "../media/patataIcon";

export const HomeBata = () => {
    return (
        <>
            <section className="home-bata">
                <div className="batata-bit">
                    <PatataIcon/>
                    <span className="span-batata-bit">Batatabit</span>
                </div>
                <h1 className="home-title">La próxima revolución en el intercambio de criptomonedas.</h1>
                <p className="home-text">Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
                <a className="home-link" href="#">Conoce Nuestros Planes <span></span></a>
            </section>
        </>
    )
}