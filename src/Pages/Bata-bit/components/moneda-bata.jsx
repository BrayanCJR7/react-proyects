import '../bata-bit.css'
import {NoStonks, Stonks} from "../media/stonks";

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
                <div className="bgImgCoin"/>
                <h2 className="BitCoin-title">
                    Visibilizamos todas las tasas de cambio.
                </h2>
                <p className="BitCoin-text">
                    Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
                </p>
                <div className="containerInfoTasas">
                    <div className="moneda">
                        <p className="titleTasaMoneda">Monedas</p>
                        <div className="grid-tasas">
                            {monedas.map(moneda => (
                                <>
                                    <div className="item">{moneda.nameCoin}</div>
                                    <div className="item mValue">
                                        ${moneda.priceCoin}
                                        {moneda.stonks ? <Stonks/> : <NoStonks/>}
                                    </div>
                                </>
                            ))}
                        </div>
                        <a href="#" className="btn btnMonedas"><b>Actualizado:</b> 19 Julio 23:45</a>
                    </div>
                    <div className="comisiones">
                        <p className="titleTasaComisiones">Monedas</p>
                        <div className="grid-tasas">
                            {comisiones.map(moneda => (
                                <>
                                    <div className="item">{moneda.nameCommissions}</div>
                                    <div className="item mValue">
                                        ${moneda.priceCommissions}
                                    </div>
                                </>
                            ))}
                        </div>
                        <a href="#" className="btn btnComisiones"><b>Actualizado:</b> 19 Julio 23:45</a>
                    </div>
                </div>
                {/*<a href="Bata-bit/components" className="btn btnComisiones">Valores en <b>$ USD</b></a>*/}
            </section>
        </>
    )
}