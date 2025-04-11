import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contador</h2>
      <div className="text-6xl font-bold text-blue-500 mb-8">{count}</div>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 flex items-center gap-1"
        >
          <Minus size={18} />
          Diminuir
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center gap-1"
        >
          <RotateCcw size={18} />
          Resetar
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-1"
        >
          <Plus size={18} />
          Aumentar
        </button>
      </div>
    </div>
  );
}