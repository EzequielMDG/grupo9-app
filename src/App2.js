import { useState } from 'react';
import './App.css';
const name = 'Ezequiel';
const num = '36';
const verdadero = true;
const falso = null;
const frutas = ['manzana', 'naranja', 'banana', 'kiwi']; 
const persona = {name: 'Juan', edad: '30' }; 


function App() {
		// count va a ser mi estado dentro del componente y su valor se lo paso en useState() y va a ser 0.
		// setCount es la funcion que sabe cambiar el estado en el componente.

		const [count, setCount] = useState(0); 

      	const incremento = () => {
			setCount(count + 1);
			console.log(count);
      	};
		const decremento = () => {
			setCount(count - 1);
			console.log(count);
      	};
		const reset = () => {
			setCount(0);
			console.log(count);
      	};


  return (
    <div className="App">
        <h1>App</h1>
        <h2>{name} - {num}</h2>
        <p>{verdadero} - {falso}</p>
        <p>{frutas.join(', ')}</p>
        
        <ul>
          {frutas.map( (f) => (
            <li key={f}>{f}</li>
          ))}
        </ul> 

        <h3>Persona: {JSON.stringify(persona)}</h3>
        <h3>Nombre: {persona.name}</h3>
        <h3>Edad: {persona.edad}</h3>

        {/* Nota */}
        {/* {frutas.map(f => {
            <li>{f}</li>
        })}
        En JavaScript, cuando utilizas llaves {} después de =>,
        debes usar la palabra clave return para que el valor se devuelva correctamente.
        De lo contrario, la función devolverá undefined.
        O también puedes usar paréntesis en lugar de llaves para un retorno implícito. */}

        
        

        <div>
          <p>{count}</p>
          <button onClick={incremento}>+</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decremento}>-</button>
        </div>

      
    </div>
  );
}

export default App;
