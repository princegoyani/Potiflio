import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../theme';

type FormState = 'default' | 'filled' | 'submitted';

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('default');
  const [formData, setFormData] = useState({ email: '', comments: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (value.length > 0 && formState === 'default') {
      setFormState('filled');
    } else if (value.length === 0 && formData.comments.length === 0 && name === 'email') {
        // Simple logic to revert if empty, though 'filled' usually sticks once interaction happens
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setFormState('submitted');
    }, 500);
  };

  const handleReset = () => {
    setFormData({ email: '', comments: '' });
    setFormState('default');
  };

  return (
    <div className="w-full max-w-lg mx-auto relative overflow-hidden">
      <AnimatePresence mode="wait">
        {formState !== 'submitted' ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl shadow-xl backdrop-blur-sm"
            style={{ 
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.primary}10`
            }}
          >
            <div className="mb-6">
              <label 
                htmlFor="email" 
                className="block mb-2 text-sm font-semibold ml-1"
                style={{ color: COLORS.primary }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="hello@example.com"
                required
                className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300"
                style={{ 
                  backgroundColor: COLORS.background,
                  borderColor: formData.email ? COLORS.primary : `${COLORS.primary}20`,
                  color: COLORS.textDark
                }}
              />
            </div>

            <div className="mb-8">
              <label 
                htmlFor="comments" 
                className="block mb-2 text-sm font-semibold ml-1"
                style={{ color: COLORS.primary }}
              >
                Message
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Let's build something efficient..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 resize-none"
                style={{ 
                  backgroundColor: COLORS.background,
                  borderColor: formData.comments ? COLORS.primary : `${COLORS.primary}20`,
                  color: COLORS.textDark
                }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              style={{ 
                backgroundColor: COLORS.primary,
                color: COLORS.surface
              }}
            >
              <span>Send Message</span>
              <Send size={18} />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-8 rounded-3xl shadow-xl text-center flex flex-col items-center justify-center min-h-[400px]"
            style={{ 
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.success}20`
            }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: `${COLORS.success}15` }}
            >
              <CheckCircle2 size={40} style={{ color: COLORS.success }} />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>Message Sent!</h3>
            <p className="mb-8 text-center max-w-xs mx-auto" style={{ color: COLORS.text }}>
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors hover:bg-opacity-10"
              style={{ 
                color: COLORS.primary, 
                backgroundColor: `${COLORS.primary}05` 
              }}
            >
              <RefreshCw size={14} />
              Send another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
