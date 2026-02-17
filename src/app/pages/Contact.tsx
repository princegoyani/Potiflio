import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { COLORS } from '../theme';
import { motion } from 'motion/react';

const SocialButton = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, backgroundColor: COLORS.surface }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm border"
    style={{ 
      color: COLORS.primary, 
      backgroundColor: `${COLORS.surface}E6`, 
      borderColor: `${COLORS.primary}20` 
    }}
  >
    <Icon size={24} />
  </motion.a>
);

export function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background with texture */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: COLORS.background,
          backgroundImage: `
            linear-gradient(to right, ${COLORS.primary}08 1px, transparent 1px),
            linear-gradient(to bottom, ${COLORS.primary}08 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Glow effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="fixed top-1/3 right-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="w-full max-w-5xl px-8 z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
        >
          <div>
            <h1 
              className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
              style={{ color: COLORS.primary }}
            >
              Let's build <br />
              <span style={{ color: COLORS.accent }}>something great.</span>
            </h1>
            <p className="text-xl max-w-md mx-auto md:mx-0" style={{ color: COLORS.text }}>
              Have a project in mind or want to discuss efficient systems? I'm always open to new opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href="mailto:pgoyani@asu.edu"
              className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl transition-all hover:translate-x-2"
              style={{ backgroundColor: `${COLORS.surface}80`, border: `1px solid ${COLORS.primary}10` }}
            >
              <div className="p-3 rounded-full" style={{ backgroundColor: `${COLORS.primary}10` }}>
                <Mail size={24} style={{ color: COLORS.primary }} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-bold tracking-wider opacity-60" style={{ color: COLORS.text }}>Email</p>
                <p className="text-lg font-medium" style={{ color: COLORS.textDark }}>pgoyani@asu.edu</p>
              </div>
            </a>
            
            <a 
              href="tel:+16025868005"
              className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl transition-all hover:translate-x-2"
              style={{ backgroundColor: `${COLORS.surface}80`, border: `1px solid ${COLORS.primary}10` }}
            >
              <div className="p-3 rounded-full" style={{ backgroundColor: `${COLORS.primary}10` }}>
                <Phone size={24} style={{ color: COLORS.primary }} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-bold tracking-wider opacity-60" style={{ color: COLORS.text }}>Phone</p>
                <p className="text-lg font-medium" style={{ color: COLORS.textDark }}>+1 (602) 586-8005</p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <SocialButton href="https://linkedin.com" icon={Linkedin} />
            <SocialButton href="https://github.com" icon={Github} />
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
