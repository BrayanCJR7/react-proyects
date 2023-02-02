import {useState} from "react";
import {Atags} from "./tags.elements";

//Simulacion de datos
const data = [
    {"tags": "Depresión"},
    {"tags": "Antibioticos"},
    {"tags": "Depresión"},
    {"tags": "comportamiento"},
    {"tags": "perros, antiinflamatorios"},
    {"tags": "inflamacion, neoplastia, acetaminofen"},
    {"tags": "inflamacion, neoplastia, purgantes"},
]

console.log(data)

export const Tags = () => {
    /*------------------ Manera 1 ------------------*/
    const palabras = new Set();
    data.forEach(objeto => {
        const tag = objeto.tags.split(", ");
        tag.forEach(tag => {
            palabras.add(tag);
        });
    });

    const tagsArray = Array.from(palabras);
    console.log("1 manera", tagsArray)
    /*------------------ Fin Manera 1 ------------------*/
    /*------------------ Manera 2 ------------------*/
    const uniqueWords = [...new Set(data.map(item => item.tags.split(", ")).flat().sort())];

    /*Este los ordena alfabeticamente*/
    console.log("2 manera", uniqueWords)
    /*------------------ Fin Manera 2 ------------------*/
    /*------------------ Usando etiquetas <a> como "checkbox ------------------*/
    const [tagSelected, setTagSelected] = useState([]);

    const handleTags = (value) => {
        if (tagSelected.includes(value)) {
            setTagSelected(tagSelected.filter((selectedValue) => selectedValue !== value));
        } else {
            setTagSelected([...tagSelected, value]);
        }
    };
    /*------------------ Fin Usando etiquetas <a> como "checkbox ------------------*/
    /*------------------ Conversor fecha ------------------*/
    const formatDate = (date) => {
        let day = date.getUTCDate();
        let month = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"][date.getMonth()];
        let year = date.getFullYear();
        return day + " " + month + " " + year;
    }
    /*------------------ Fin  ------------------*/

    return (
        <>
            <h4>Botones que se comportan como checkbox</h4>
            {tagsArray.map((item, index) => (
                <Atags className="tags"
                       color={"#1A9AF7"}
                       key={item}
                       onClick={(e) => {
                           e.preventDefault();
                           handleTags(item);
                       }}
                       selected={tagSelected.includes(item)}>
                    {item}
                </Atags>
            ))}
            <p>Estos botones se estan renderizando de una simulacionde datos, donde se repiten palabras</p>
            <h3>Con css</h3>

            {tagsArray.map((item, index) => (
                <a className={`tags ${tagSelected.includes(item) ? "selected" : ""}`}
                   key={item}
                   onClick={(e) => {
                       e.preventDefault();
                       handleTags(item);
                   }}
                   selected={tagSelected.includes(item)}>
                    {item}
                </a>
            ))}

            <h2>convirtiendo fecha 02-01-2023 a {formatDate(new Date("02-01-2023"))}</h2>
        </>
    );
};

export const fecha = () => {
    const formatDate = (date) => {
        let day = date.getUTCDate();
        let month = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"][date.getMonth()];
        let year = date.getFullYear();
        return day + " " + month + " " + year;
    }
    return (
        <>
            <h2>convirtiendo fecha 2023-01-02 a {formatDate(new Date(Date.parse("2023-01-02")))}</h2>
        </>
    );
};


