import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Footer from './components/Footer';
import SolverBoard from './components/SolverBoard';

function App() {
  const [activeMode, setActiveMode] = useState<'game' | 'solver'>('game');

  return (
    <>
      <div className=" mx-auto flex flex-col space-y-2 sm:border-6 border-gray-800 m-2 sm:pt-2 md:px-20 md:pt-8">
        <div className="flex-shrink-0">
          <Header activeMode={activeMode} onModeChange={setActiveMode} />
          <hr className="my-2 border-lime-600  border-[1.8px]" />
        </div>
        {activeMode === 'game' && (
          <div className="flex-1 flex justify-center">
            <GameBoard />
          </div>
        )}
        {activeMode === 'solver' && (
          <div className="flex-1 flex justify-center">
            <SolverBoard />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
