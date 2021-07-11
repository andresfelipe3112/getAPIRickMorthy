import ResidentContainer from "./ResidentContainer.jsx"
import LocationInfo from "./LocationInfo.jsx"
import { useState, useEffect } from 'react';


export default function LocationContainer({ inputDataApp }) {


    const [numberRandom] = useState(Math.round(Math.random() * (15 - 1) + 1))

    const [dataLocation, setDataLocation] = useState("")
    const [input, setInput] = useState("")



    useEffect(() => {
        if (inputDataApp !== "") {
            setInput(inputDataApp)
        }
    }, [inputDataApp])


    useEffect(() => {

        const getAPIFisrtRederDOM = async () => {

            try {

                const url = `https://rickandmortyapi.com/api/location/${numberRandom}`
                const response = await fetch(url);
                const json = await response.json();



                let objLocation = {
                    name: json["name"],
                    type: json["type"],
                    dimensions: json["dimension"],
                    resident: json["residents"],
                    residentsNumber: json["residents"].length,
                }

                setDataLocation(objLocation)

            } catch (error) {
                throw Error(error)
            }

        }

        if (input === "") {
            getAPIFisrtRederDOM()
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {

        const getAPIInputRederDOM = async () => {
            try {
                const url = `https://rickandmortyapi.com/api/location/?name=${input}`
                const response = await fetch(url);
                const json2 = await response.json()
                const ResponseJason = await json2["results"][0]


                let objLocation2 = {
                    name: ResponseJason["name"],
                    type: ResponseJason["type"],
                    dimensions: ResponseJason["dimension"],
                    resident: ResponseJason["residents"],
                    residentsNumber: ResponseJason["residents"].length
                }

                setDataLocation(objLocation2)

            } catch (error) {
                throw Error(error)
            }
        }


        if (input !== "") {
            getAPIInputRederDOM()
        }

    }, [input])






    return (
        <div>
            <LocationInfo objLocation={dataLocation} />
            <ResidentContainer character={dataLocation.resident} />
        </div>
    )
}