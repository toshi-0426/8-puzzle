import GameBoard from '@/features/game/GameBoard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SolverBoard from '@/features/solver/SolverBoard';
import { motion, AnimatePresence } from 'framer-motion';
import { useModeStore } from '@/store/useModeStore';

function App() {
  const activeMode = useModeStore((state) => state.activeMode);

  return (
    <>
      <div className="mt-0 md:mt-4 mx-auto flex flex-col sm:space-y-2 sm:border-6 border-gray-800 sm:m-2 pt-1 md:px-20 md:pt-8">
        <div className="flex-shrink-0">
          <Header />
          <hr className="my-1 sm:my-2 border-lime-600  border-[1.8px]" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-1 w-full flex justify-center"
          >
            {activeMode === 'game' ? <GameBoard /> : <SolverBoard />}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
}

export default App;
