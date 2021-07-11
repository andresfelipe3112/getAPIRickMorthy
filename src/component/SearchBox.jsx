import "./SearchBox.css"
import imgNombre from "./img/nombre.png"
import rickLuna from "./img/rickluna.png"

import { useRef, useEffect, useState } from "react";



export default function SearchBox(prop) {


    //use_ref
    const inputEl = useRef("");
    const selection = useRef("")



    //useStates
    const [location, setLocation] = useState("");



    //functions
    const selectInput = () => {//esta funcion hace que la data del html select se escriba automaticamente en el input.value del html input para que refleje a la par
        inputEl.current.value = selection.current.value
    }

    const textInput = () => { //esta funcion pasa el input.value al componente padre
        prop.inputDataApp(inputEl.current.value)
    }


    //useEffect

    useEffect(() => {



        let dataLocations = [];
        const getOnlyLocation = async () => { //Esta función escribe en el select html todo los planeas
            // para que el usurio tenga como escoger cual ver

            try {

                const url = `https://rickandmortyapi.com/api/location/?page=1"`
                const data = await fetch(url)
                const locations = await data.json()

                const url2 = `https://rickandmortyapi.com/api/location/?page=2"`
                const data2 = await fetch(url2)
                const locations2 = await data2.json()

                const url3 = `https://rickandmortyapi.com/api/location/?page=3"`
                const data3 = await fetch(url3)
                const locations3 = await data3.json()

                const url4 = `https://rickandmortyapi.com/api/location/?page=4"`
                const data4 = await fetch(url4)
                const locations4 = await data4.json()

                const url5 = `https://rickandmortyapi.com/api/location/?page=4"`
                const data5 = await fetch(url5)
                const locations5 = await data5.json()

                const url6 = `https://rickandmortyapi.com/api/location/?page=4"`
                const data6 = await fetch(url6)
                const locations6 = await data6.json()


                locations6["results"].map(item =>
                    dataLocations.push(item.name))

                locations5["results"].map(item =>
                    dataLocations.push(item.name))

                locations4["results"].map(item =>
                    dataLocations.push(item.name))

                locations3["results"].map(item =>
                    dataLocations.push(item.name))

                locations2["results"].map(item =>
                    dataLocations.push(item.name))

                locations["results"].map(item =>
                    dataLocations.push(item.name))


                setLocation(dataLocations)

            } catch (error) { // si hay algún error lo atrapamos aqui

                throw Error(error)

            }

        }
        getOnlyLocation()
    }, []) // no usamos dependencia porque solo necesitamos que se ejecute una ves


    return (

        <div className="SearchBoxContainer">
            <img id="nameRick" src={imgNombre} alt="" />

            <div className="SearchBoxForm">

                <img id="rickLuna" src={rickLuna} alt="" />
                <input ref={inputEl} type="text"  ></input>


                {<select onChange={selectInput} ref={selection}  >
                    <option defaultValue="selected"  > ¡Selected City! </option>
                    {
                        location !== "" ?
                            location.map((item, index) =>
                                <option key={index} value={item}>{item}</option>
                            ) : null}
                </select>}



                <button onClick={textInput} >Search Ubication</button>
            </div>
        </div>



    )
}



