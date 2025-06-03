
//import './App.css'

import GameBoard from './components/GameBoard'
import Header from './components/header'

function App() {
  return (
    <div className="min-h-screen mx-auto flex flex-col space-y-4">
      <div className='flex-shrink-0'>
        <Header />
        <hr className='my-2 border-red-600  border-[1.8px]'/> 
      </div>
      <div className='flex-1 flex justify-center'>
        <GameBoard />
      </div>
    </div>
  )
}

export default App
