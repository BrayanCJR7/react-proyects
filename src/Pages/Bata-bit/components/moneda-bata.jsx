import '../bata-bit.css'

export const MonedaBata = () => {
    return (
        <>
            <section className="BitCoin">
                <div className="bgImgCoin"></div>
                <h2 className="BitCoin-title">
                    Visibilizamos todas las tasas de cambio.
                </h2>
                <p className="BitCoin-text">
                    Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
                </p>
                <a href="Bata-bit/components" className="btn btnMonedas">Valores en <b>$ USD</b></a>
                <a href="Bata-bit/components" className="btn btnComisiones">Valores en <b>$ USD</b></a>
            </section>
        </>
    )
}