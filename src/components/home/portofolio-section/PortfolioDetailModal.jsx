import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dartIcon from "@/assets/svg/dart.svg";
import firebaseIcon from "@/assets/svg/firebase.svg";
import flutterIcon from "@/assets/svg/flutter.svg";
import figmaIcon from "@/assets/svg/figma.svg";

const techIcons = {
  Flutter: <Image src={flutterIcon} alt="Flutter" width={32} height={32} />,
  Dart: <Image src={dartIcon} alt="Dart" width={32} height={32} />,
  Firebase: <Image src={firebaseIcon} alt="Firebase" width={32} height={32} />,
  Figma: <Image src={figmaIcon} alt="Figma" width={32} height={32} />,
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
};

export default function PortfolioDetailModal({ open, onClose, data }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && data && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div 
            ref={modalRef} 
            className="relative bg-neutral-50 rounded-3xl shadow-2xl max-w-6xl w-full flex flex-col md:flex-row p-8 md:p-16 gap-8"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close */}
            <motion.button
              onClick={onClose}
              className="absolute top-8 right-8 text-neutral-500 hover:text-neutral-800 focus:outline-none transition-colors duration-200 cursor-pointer"
              aria-label="Close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={36} />
            </motion.button>
            {/* Left */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.h2 
                className="typo-h3 md:typo-h2 typo-gradient mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {data.title}
              </motion.h2>
              <motion.h3 
                className="typo-h5 text-neutral-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Aplikasi {data.category}
              </motion.h3>
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="typo-b-md text-neutral-600 leading-relaxed whitespace-pre-line">
                  {data.longDescription || data.description}
                </p>
              </motion.div>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="typo-h5 text-neutral-700 mb-4">Teknologi</h4>
                <div className="flex flex-wrap gap-4">
                  {data.technologies?.map((tech, index) => (
                    <motion.div 
                      key={tech} 
                      className="w-16 h-16 p-3 rounded-xl border-4 border-[#fe8d2d] bg-white shadow-md transition-transform duration-200 hover:scale-105 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {techIcons[tech] || <span className="typo-b-sm">{tech}</span>}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Right */}
            <motion.div 
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative w-[220px] h-[420px] md:w-[460px] md:h-[550px] overflow-visible flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={data.detailImage || data.portfolioImage}
                  alt={data.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 