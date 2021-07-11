
import { useState, useEffect } from 'react';
import ResidentInfo from './ResidentInfo.jsx'



export default function ResidentContainer({ character }) {



    const [data, setData] = useState([]);
    const [info, setInfo] = useState([])

    useEffect(() => {



        async function getApiCharacters() {




            if (character) {

                let responsePromese = [];
                for (const iterator of character) {
                    const personaje = await fetch(iterator);
                    const json = await personaje.json()
                    responsePromese.push(json)
                }

                responsePromese = await Promise.all(responsePromese)

                setData(responsePromese)
            }

        }

        getApiCharacters()


    }, [character])


    useEffect(() => {
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