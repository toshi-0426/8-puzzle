import { useState } from 'react';
import GameBoard from './components/GameBoard'
import Header from './components/Header'


function App() {
  const [activeTab, setActiveTab] = useState< 'game' | 'solver' >('game');

  


  return (
    <div className="min-h-screen mx-auto flex flex-col space-y-4">
      <div className='flex-shrink-0'>
        <Header />
        <hr className='my-4 border-lime-600  border-[1.8px]'/> 
      </div>
      {activeTab === 'game' && <div className='flex-1 flex justify-center'>
        <GameBoard />
      </div>}
      {activeTab === 'solver' && <div className='flex-1 flex justify-center'>Hello</div>}
    </div>
  )
}

export default App
