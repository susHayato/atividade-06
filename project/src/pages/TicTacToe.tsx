import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

type Player = 'X' | 'O' | null;
type Board = Player[];

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: Board): Player => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index: number) => (
    <button
      className="w-20 h-20 border-2 border-gray-300 text-4xl font-bold flex items-center justify-center hover:bg-gray-100"
      onClick={() => handleClick(index)}
    >
      <span className={board[index] === 'X' ? 'text-blue-500' : 'text-pink-500'}>
        {board[index]}
      </span>
    </button>
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Jogo da Velha</h2>
      <div className="mb-6 text-center">
        {winner ? (
          <div className="text-xl font-bold text-green-500">
            Vencedor: {winner}
          </div>
        ) : isDraw ? (
          <div className="text-xl font-bold text-gray-500">
            Empate!
          </div>
        ) : (
          <div className="text-xl">
            Próximo jogador: <span className={isXNext ? 'text-blue-500' : 'text-pink-500'}>{isXNext ? 'X' : 'O'}</span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {Array(9).fill(null).map((_, i) => renderSquare(i))}
      </div>
      <button
        onClick={resetGame}
        className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
      >
        <RotateCcw size={20} />
        Reiniciar Jogo
      </button>
    </div>
  );
}