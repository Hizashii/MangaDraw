'use client';

import { useState } from 'react';
import BlurText from './BlurText';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  const handleAnimationComplete = () => {
    setVisible(false);
    setTimeout(onComplete, 500); 
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <BlurText
            text="What are we making today?"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl mb-8 text-white"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 