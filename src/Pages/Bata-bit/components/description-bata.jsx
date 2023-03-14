import {CheckIcon, DolarIcon, EyeIcon, TimeIcon} from "../media/serviceDescriptionIcon";
import {PatataIcon} from "../media/patataIcon";

export const DescriptionBata = () => {
    return (
        <>
            <section className="mainDescription">
                <span className="patataIcon"><PatataIcon/></span>
                <h2 className="descriptionTitle">Creamos un producto sin comparación.</h2>
                <h3 className="secondDescriptionTitle">Confiable y diseñado para su uso diario.</h3>
                <div className="descriptionCard">
                    <TimeIcon/>
                    <h4 className="titleCard">Tiempo real</h4>
                    <p className="textCard">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
                </div>
                <div className="descriptionCard">
                    <EyeIcon/>
                    <h4 className="titleCard">No hay tasas escondidas</h4>
                    <p className="textCard">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
                </div>
                <div className="descriptionCard">
                    <DolarIcon/>
                    <h4 className="titleCard">Compara monedas</h4>
                    <p className="textCard">No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
                </div>
                <div className="descriptionCard">
                    <CheckIcon/>
                    <h4 className="titleCard">Información confiable</h4>
                    <p className="textCard">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
                </div>
            </section>
        </>
    );
};