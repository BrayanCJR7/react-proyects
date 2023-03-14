import {ArrowRigth} from "../media/icons";

const planes = [
    {
        tipo: "Pago Anual",
        valor: 99,
        descripcion: "*Ahorras $129 comparado al plan mensual.",
        recomendado: true
    },
    {
        tipo: "Pago Mensual",
        valor: 12,
        descripcion: "*Ahorras $129 comparado al plan mensual.",
        recomendado: false
    },
    {
        tipo: "Pago Trimestral",
        valor: 32,
        descripcion: "*Ahorras $3 comparado al plan mensual.",
        recomendado: false
    },

]
export const Planes = () => {
    return (
        <>
            <section className="planes">
                <h2 className="planes__title">
                    Escoge el plan que mejor se ajuste a ti.
                </h2>
                <p className="planes__subtitle">
                    Cualquier plan te da acceso completo a nuestra plataforma.
                </p>
                <div className="container__card--plan">
                    {planes.map(plan => (
                        <>
                            <div className="card--plan">
                                {
                                    plan.recomendado
                                        ? <div className="recomendado">Recomendado</div>
                                        : ""
                                }
                                <span className="card__tipo">{plan.tipo}</span>
                                <span className="card__valor">{plan.valor}</span>
                                <span className="card__description">{plan.descripcion}</span>
                                <button className="card__button">
                                    Escoger este <ArrowRigth/>
                                </button>
                            </div>
                        </>
                    ))}
                </div>

                <div className="container__carrousel">

                </div>
            </section>
        </>
    );
};

