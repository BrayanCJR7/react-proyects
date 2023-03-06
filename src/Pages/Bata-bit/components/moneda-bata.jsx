import '../bata-bit.css'

const monedas = [
    {nameCoin: 'Bitcoin', priceCoin: 1.96, stonks: false},
    {nameCoin: 'Ethereum', priceCoin: 0.07, stonks: true},
    {nameCoin: 'Ripple', priceCoin: 2.15, stonks: false},
    {nameCoin: 'Stellar', priceCoin: 4.96, stonks: false}
]
const comisiones = [
    {nameCommissions: 'Bitrade', priceCommissions: 12.96},
    {nameCommissions: 'Bitpreco', priceCommissions: 13.07},
    {nameCommissions: 'Novadax', priceCommissions: 13.15},
    {nameCommissions: 'Coinext', priceCommissions: 14.96}
]
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
                <div className="containerInfoTasas">
                    <p className="titleTasas">Monedas</p>
                </div>
                <a href="#" className="btn btnMonedas"><b>Actualizado:</b> 19 Julio 23:45</a>
                {/*<a href="Bata-bit/components" className="btn btnComisiones">Valores en <b>$ USD</b></a>*/}
            </section>
        </>
    )
}