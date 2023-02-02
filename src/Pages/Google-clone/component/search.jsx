import React from "react";

const SearchSection = () => {
    return (
        <>
            <main className="main-google">
                <section className="search-section">
                    <div className="container-logo">
                        <div id="logo"/>
                    </div>
                    <div className="container-input">
                        <div className="icon-search"/>
                        <input type="text" placeholder="Buscar en Google o escribir una URL"/>
                        <button className="button-mic"/>
                    </div>
                    <div className="container-direct-access">
                        <a className="direct-access" href="src/Copia-pag-google-busqueda/Components">
                            <div className="d-a-icon">
                                <div className="icon">

                                </div>
                            </div>
                            <span>Página 1</span>
                        </a>
                        <a className="direct-access" href="src/Copia-pag-google-busqueda/Components">
                            <div className="d-a-icon">
                                <div className="icon">

                                </div>
                            </div>
                            <span>Página 2</span>
                        </a>
                        <a className="direct-access" href="src/Copia-pag-google-busqueda/Components">
                            <div className="d-a-icon">
                                <div className="icon">

                                </div>
                            </div>
                            <span>Página 3</span>
                        </a>
                    </div>
                    <div id="customizeButtonContainer">
                        <div className="customizeButton">
                            <div className="customize-icon"/>
                            <div className="customize-text">Personalizar Chrome</div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export {SearchSection}