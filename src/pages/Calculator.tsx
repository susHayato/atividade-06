import React, { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const Button = ({ value, onClick, className = '' }: { value: string; onClick: () => void; className?: string }) => (
    <button
      onClick={onClick}
      className={`p-4 text-xl font-bold rounded-lg transition-colors ${className}`}
    >
      {value}
    </button>
  );

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Calculadora</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="text-gray-500 text-right text-sm h-6">{equation}</div>
        <div className="text-3xl text-right font-bold">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Button value="7" onClick={() => handleNumber('7')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="8" onClick={() => handleNumber('8')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="9" onClick={() => handleNumber('9')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="÷" onClick={() => handleOperator('/')} className="bg-blue-500 text-white hover:bg-blue-600" />
        
        <Button value="4" onClick={() => handleNumber('4')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="5" onClick={() => handleNumber('5')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="6" onClick={() => handleNumber('6')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="×" onClick={() => handleOperator('*')} className="bg-blue-500 text-white hover:bg-blue-600" />
        
        <Button value="1" onClick={() => handleNumber('1')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="2" onClick={() => handleNumber('2')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="3" onClick={() => handleNumber('3')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="-" onClick={() => handleOperator('-')} className="bg-blue-500 text-white hover:bg-blue-600" />
        
        <Button value="0" onClick={() => handleNumber('0')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="." onClick={() => handleNumber('.')} className="bg-gray-200 hover:bg-gray-300" />
        <Button value="=" onClick={handleEqual} className="bg-pink-500 text-white hover:bg-pink-600" />
        <Button value="+" onClick={() => handleOperator('+')} className="bg-blue-500 text-white hover:bg-blue-600" />
        
        <Button value="C" onClick={handleClear} className="col-span-4 bg-gray-500 text-white hover:bg-gray-600" />
      </div>
    </div>
  );
}