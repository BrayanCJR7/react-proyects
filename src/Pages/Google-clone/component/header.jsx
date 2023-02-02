import React from "react";
import './google-clone.css'
/*import MenuIncon from '../media/menu.svg'*/
import ProfileImg from '../media/profileImg.jpg'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="menu">
                    <div>
                        <a href="src/Copia-pag-google-busqueda/Components">
                            Gmail
                        </a>
                    </div>
                    <div>
                        <a href="src/Copia-pag-google-busqueda/Components">
                            Imágenes
                        </a>
                    </div>
                    <div className="menu-icon">
                        <a href="src/Copia-pag-google-busqueda/Components"></a>
                    </div>
                    <div>
                        <a href="src/Copia-pag-google-busqueda/Components">
                            <img className="profileImg" src={ProfileImg} alt="img profile"/>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export {Header}