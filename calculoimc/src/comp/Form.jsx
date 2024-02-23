import React, { useState } from 'react';

const IMCCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateIMC = () => {
    const heightMeters = height / 100; // Convertendo altura de cm para metros
    const imc = weight / (heightMeters * heightMeters);

    let resultText = '';

    if (imc < 18.5) {
      resultText = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      resultText = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      resultText = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      resultText = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 40) {
      resultText = 'Obesidade grau II';
    } else {
      resultText = 'Obesidade grau III';
    }

    setResult(resultText);
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <div>
        <label htmlFor="weight">Peso (kg): </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Altura (cm): </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateIMC}>Calcular IMC</button>
      {result && <p>Resultado: {result}</p>}
    </div>
  );
};

export default IMCCalculator;