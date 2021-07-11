import SearchBox from "./component/SearchBox.jsx"
import LocationContainer from "./component/LocationContainer.jsx"
import './App.css';
import { useState } from "react"

function App() {


  //Creamos un estado que va recibir de el componente </SearchBox> 
  const [inputDataApp, setInputDataApp] = useState("")


  //functions

  //Esta función es la encargada de pasar el input.value del compnente hijo al componente padre
  const onChangeInputData = (data) => {
    setInputDataApp(prevState => {
      return prevState = data
    })

  }


  return (
    <div className="App">

      <SearchBox inputDataApp={onChangeInputData} />  {/* le pasamos la función por parametro encargada de pasar el input de hijo a padre compnente */}
      <LocationContainer inputDataApp={inputDataApp} />
    </div>
  );
}

export default App;
