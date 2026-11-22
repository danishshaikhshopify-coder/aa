import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ClickReveal({ trigger, label, message }: { trigger: ReactNode; label: string; message: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="surprise-card paper">
      <motion.button
        className="surprise-trigger"
        onClick={() => setOpen(true)}
        aria-label={label}
        whileHover={{ scale: 1.08, rotate: 4 }}
        whileTap={{ scale: 0.95 }}
      >
        {trigger}
      </motion.button>
      <p className="hand-text">{label}</p>
      <AnimatePresence>
        {open && (
          <motion.p
            className="hand-text surprise-reveal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
