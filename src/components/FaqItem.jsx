import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button
      
        onClick={onClick}
        className={`faq-question ${isOpen ? "active" : ""}`}
      >
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? "-" : "+"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
