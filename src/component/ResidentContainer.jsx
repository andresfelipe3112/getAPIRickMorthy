
import { useState, useEffect } from 'react';
import ResidentInfo from './ResidentInfo.jsx'



export default function ResidentContainer({ character }) {


    // useStates

    const [data, setData] = useState([]) // se guardan las promesas ejecutadas, la info de cada personaje
    const [info, setInfo] = useState([])



    //useEffect

    useEffect(() => {  // LLAMA A LAS APIS PERO SOLO DE LA URL DE CADA PERSONAJE
        async function getApiCharacters() {

            if (character) {

                let responsePromese = []; // agregamos las promesas a una url
                for (const iterator of character) {
                    const personaje = await fetch(iterator);
                    const json = await personaje.json()
                    responsePromese.push(json)
                }

                responsePromese = await Promise.all(responsePromese) //ejecutamos con all.Promise para aumentar el rendimiento de la llamada
                setData(responsePromese)
            }
        }
        getApiCharacters()

    }, [character])


    useEffect(() => { // pasamos los datos de un estado a otro para poder hacer un thurty
        if (data) {
            setInfo(data)
        }
    }, [data])


    return (
        <div className="">
            <ResidentInfo info={info} />
        </div>
    )
}