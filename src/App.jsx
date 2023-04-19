import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularImc = () => {
    const alturaMetros = altura / 100; // Converter altura para metros
    const imc = peso / (alturaMetros * alturaMetros);
    setImc(imc);
  };

  const getClassificacao = () => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else if (imc < 35) {
      return 'Obesidade grau 1';
    } else if (imc < 40) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <label>
        Altura (cm):
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <label>
        Peso (kg):
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <button onClick={calcularImc}>Calcular IMC</button>
      {imc !== null && (
        <div>
          <p>Seu IMC é: {imc.toFixed(2)}</p>
          <p>Sua classificação é: {getClassificacao()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
