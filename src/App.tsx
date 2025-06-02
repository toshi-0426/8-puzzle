import './App.css'
import Board from './components/board'
//import Grid from './components/grid'
import Header from './components/header'

function App() {
 

  return (
    <div className="mx-8">
      <Header />
      <hr className='my-4 border-gray-200 dark:border-gray-800 border-[1.8px]'/>
      <Board />
    </div>
  )
}

export default App
