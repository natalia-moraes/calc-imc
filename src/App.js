import './app.css'
import React from 'react';

function App() {
  const [peso, setPeso] = React.useState('')
  const [altura, setAltura] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')

  function calcularIMC() {
    const alt = altura / 100;
    const imc = (peso / (alt * alt)).toFixed(2)
    

    if(imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc)
    }else if(imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal! Seu IMC: " + imc)
    }else if(imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso! Seu IMC: " + imc)
    }else if(imc > 34.9) {
      setMensagem("Você está acima do peso, cuidado! Seu IMC: " + imc)
    }

    setPeso('')
    setAltura('')
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input id={peso}
          type="text"
          placeholder="Peso em (Kg) Ex: 90"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <input id={altura}
          type="text"
          placeholder="altura em (cm) Ex: 180"
          value={altura}
          onChange={ (event) => setAltura(event.target.value)}
        />
        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>
    </div> 
  )
}

export default App;
