import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer
        transition-colors duration-300
        ${dark ? "bg-gray-700" : "bg-yellow-400"}`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-sm"
      >
        {/* ICON ANIMATION */}
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {dark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;