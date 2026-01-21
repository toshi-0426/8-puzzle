import { useModeStore, type gameMode } from '@/store/useModeStore';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SquareChevronDown } from 'lucide-react';

function ModeSelector() {
  const { activeMode, setActiveMode } = useModeStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (mode: gameMode) => {
    setActiveMode(mode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        className="appearance-none focus:outline-none focus:ring-lime-600 focus:ring-2 text-gray-700 cursor-pointer px-2 py-1 text-sm font-semibold rounded-lg shadow-xl/10 flex items-center gap-1"
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        <span>{activeMode === 'game' ? 'Game' : 'Solver'}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <SquareChevronDown size={16} strokeWidth={0.75} />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg overflow-hidden border border-gray-200"
          >
            <li
              className="text-xs text-center px-2 py-1 hover:bg-gray-100 cursor-pointer text-gray-700 font-semibold"
              onClick={() => handleSelect('game')}
            >
              Game
            </li>
            <li
              className="text-xs text-center px-2 py-1 hover:bg-gray-100 cursor-pointer text-gray-700 font-semibold"
              onClick={() => handleSelect('solver')}
            >
              Solver
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ModeSelector;
