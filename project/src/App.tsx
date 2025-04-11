import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ListTodo, MousePointerClick, Hash, Calculator as CalculatorIcon, MapPin } from 'lucide-react';
import TodoList from './pages/TodoList';
import Counter from './pages/Counter';
import TicTacToe from './pages/TicTacToe';
import Calculator from './pages/Calculator';
import CepSearch from './pages/CepSearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-pink-400">
        <header className="bg-white/10 backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <h1 className="text-white font-bold text-xl">React Apps</h1>
              </div>
              <nav className="flex space-x-8">
                <NavLink to="/todo" icon={<ListTodo className="w-5 h-5 mr-2" />} text="To-Do List" />
                <NavLink to="/counter" icon={<MousePointerClick className="w-5 h-5 mr-2" />} text="Contador" />
                <NavLink to="/tictactoe" icon={<Hash className="w-5 h-5 mr-2" />} text="Jogo da Velha" />
                <NavLink to="/calculator" icon={<CalculatorIcon className="w-5 h-5 mr-2" />} text="Calculadora" />
                <NavLink to="/cep" icon={<MapPin className="w-5 h-5 mr-2" />} text="Buscar CEP" />
              </nav>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold">Bem-vindo!</h2>
                <p className="mt-4">Selecione uma funcionalidade no menu acima para começar.</p>
              </div>
            } />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/cep" element={<CepSearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center ${
        isActive ? 'text-pink-200' : 'text-white hover:text-pink-200'
      } transition-colors`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default App;