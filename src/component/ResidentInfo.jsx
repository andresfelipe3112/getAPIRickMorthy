/* eslint-disable react-hooks/exhaustive-deps */

import "./ResidentInfo.css"
import { useState, useEffect } from "react"

export default function ResidentInfo({ info }) {


    // useStates

    const [dataOnly10, setDataOnly10] = useState(info.slice(0, 10))
    const [contadorBotonestate, setConstadorBotonesestate] = useState(1)
    const [buttons, setButtons] = useState(0);


    //functions

    function botones() {  // Esta funcion determina cuantos botones necesito mostraR 1 x por cada 10 personajes
        let contadorBotones = 1
        let reinicio = 0;
        for (let index = 0; index < info.length; index++) {
            if (reinicio === 10) {
                contadorBotones = contadorBotones + 1
                reinicio = 0;
            }
            reinicio++
            setConstadorBotonesestate(contadorBotones)
        }
    }

    function nextPage(e) {  // esta function permite segun el el valor del boton saber que rango de personajes mostrar, cada ves que haga click en un boton rederiza
        console.log(`hola soy buton numero ${e.target.innerText}`);
        switch (e.target.innerText) {
            case "1": setDataOnly10(info.slice(0, 10))
                break;
            case "2": setDataOnly10(info.slice(10, 20))
                break;
            case "3": setDataOnly10(info.slice(20, 30))
                break;
            case "4": setDataOnly10(info.slice(30, 40))
                break;
            case "5": setDataOnly10(info.slice(40, 50))
                break;
            case "6": setDataOnly10(info.slice(50, 60))
                break;
            case "7": setDataOnly10(info.slice(60, 70))
                break;
            case "8": setDataOnly10(info.slice(70, 80))
                break;
            case "9": setDataOnly10(info.slice(90, 100))
                break;
            case "10": setDataOnly10(info.slice(100, 110))
                break;
            case "11": setDataOnly10(info.slice(110, 120))
                break;
            case "12": setDataOnly10(info.slice(130, 140))
                break;
            default:
                break;
        }
    }

    function contadorButtons() { //ESTA FUNCION MANDA A UN ESTADO LA CANTIDAD DE BOTONES EN HTML
        let html = []
        for (let index = 0; index < contadorBotonestate; index++) {
            html.push(<button className="optionsNextPage" onClick={nextPage} key={index}>{index + 1}</button>)
        }
        setButtons(html)
    }

    useEffect(() => {  // REDERIZA EL PRIMER BOTON SEGUN EL RANDOM
        setDataOnly10(info.slice(0, 10))
        if (contadorBotonestate > 0) {
            contadorButtons()
        }
    }, [info, contadorBotonestate])


    useEffect(() => { // CREA LOS BOTONES DEL PRIMER RENDER
        return () => {
            if (info.length > -1) {
                botones()
            }
        }
    })


    return (
        <>


            <div className="ResidenContainer">
                <div className="buttonsContainer" >

                    {buttons.length > 0 ? buttons.map(button => //RENDERIZO LOS BOTONES
                        button) : null}
                </div>

                {
                    dataOnly10.map((item) => {

                        return (

                            <div className="personaje" key={item.id}>
                                <div>
                                    <img className="person" src={item.image} alt=""></img>
                                </div>

                                <div className="text" >
                                    <h1 className="h1" >{item.name}</h1>
                                    <h3 className="h3">{` ${item.species}`}</h3>
                                    <h3 className="h4 ">{item.type ? `${item.type.toUpperCase()}` : null}</h3>
                                    <h3 className="h4">{`Status: ${item.status.toUpperCase()}`}</h3>
                                    <h4 className="h4">{`Gender: "${item.gender.toUpperCase()}"`}</h4>
                                    <h4 className="h4">{`Espisodes: ${item.episode.length}`}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}