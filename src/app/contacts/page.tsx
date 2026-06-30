'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ContactsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const contacts = [
    { 
      icon: '📞', 
      label: 'Телефон', 
      value: '+380 (67) 123-45-67', 
      href: 'tel:+380671234567' 
    },
    { 
      icon: '✉️', 
      label: 'Email', 
      value: 'hello@3dprint.com', 
      href: 'mailto:hello@3dprint.com' 
    },
    { 
      icon: '🕒', 
      label: 'Графік роботи', 
      value: 'Пн–Пт 9:00–18:00',
      href: null 
    },
    { 
      icon: '📍', 
      label: 'Адреса', 
      value: 'м. Львів, вул. Прикладна, 3',
      href: null 
    },
  ];

  const socials = [
    {
      name: 'Telegram',
      href: 'https://t.me/3d_print',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0088cc">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/3d_print_ua',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#E4405F">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <div ref={ref} className="pt-32 pb-20 container-custom max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-[#1a3c34] font-heading text-4xl md:text-5xl font-bold">Контакти</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-2">
          Зв'яжіться з нами – ми завжди на зв'язку
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* Контакти – горизонтальна сітка, повністю видимий текст */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {contacts.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="text-gray-700 font-medium hover:text-[#1a3c34] transition break-words block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium break-words">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Соціальні мережі + Telegram CTA – горизонтальний ряд */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Соціальні мережі */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start"
          >
            <h2 className="text-lg font-bold text-[#1a3c34] mb-4">Ми в соцмережах</h2>
            <div className="flex flex-wrap gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-[#c9a84c] hover:bg-[#f5f0eb] transition-all duration-200"
                >
                  {social.icon}
                  <span className="text-sm font-medium text-gray-700">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Заклик писати в Telegram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-[#1a3c34] to-[#2d5a4b] rounded-2xl shadow-md border border-[#2d5a4b] p-6 flex flex-col items-start justify-center"
          >
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="text-white font-bold text-lg">Telegram</span>
            </div>
            <p className="text-white/80 text-sm mb-4">Напишіть нам у Telegram – відповімо протягом 12 годин</p>
            <Button href="https://t.me/3d_print" variant="primary" className="bg-[#c9a84c] text-[#1a3c34] hover:bg-[#b89a3e]">
              Написати в Telegram
            </Button>
          </motion.div>
        </div>

        {/* Карта */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-56 flex items-center justify-center text-gray-400"
        >
          <div className="text-center">
            <span className="text-5xl block mb-3">📍</span>
            <p className="font-medium text-gray-600">Ми знаходимось тут</p>
            <p className="text-sm text-gray-400">м. Львів, вул. Прикладна, 3</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}