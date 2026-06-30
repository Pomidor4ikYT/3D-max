'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import FileUpload from '@/components/forms/FileUpload';

// Список послуг з кастомними полями
const services = [
  {
    id: 1,
    title: '3D-друк моделей',
    description: 'Друк будь-яких 3D-моделей з високою точністю та якістю.',
    icon: '🖨️',
    category: 'Друк',
    categoryColor: 'bg-green-500',
    features: ['Висота шару 0.1 мм', 'Матеріали: PLA, ABS, PETG, TPU', 'Розмір до 220×220×250 мм'],
    price: 'від 4 грн/см³',
    longDesc: 'Ми друкуємо будь-які 3D-моделі з високою точністю. Використовуємо якісні матеріали та сучасне обладнання.',
    formFields: [
      { type: 'select', label: 'Матеріал', name: 'material', options: ['PLA', 'ABS', 'PETG', 'TPU'], required: true },
      { type: 'text', label: 'Бажаний колір', name: 'color', placeholder: 'Наприклад: чорний, білий, синій' },
      { type: 'file', label: 'Файл моделі (STL, OBJ, 3MF)', name: 'file', required: true },
      { type: 'text', label: 'Розміри (необов\'язково)', name: 'size', placeholder: 'Наприклад: 50×30×20 мм' },
    ],
  },
  {
    id: 2,
    title: '3D-моделювання',
    description: 'Створення 3D-моделей за вашими ескізами або ідеями.',
    icon: '🎨',
    category: 'Дизайн',
    categoryColor: 'bg-blue-500',
    features: ['Моделювання за ескізами', 'Оптимізація для друку', 'Формати: STL, OBJ, 3MF'],
    price: 'від 500 грн',
    longDesc: 'Розробимо 3D-модель будь-якої складності. Працюємо за вашими ескізами, кресленнями або просто ідеями.',
    formFields: [
      { type: 'file', label: 'Завантажте ескіз або референс (PNG, JPG, PDF)', name: 'sketch', required: true },
      { type: 'textarea', label: 'Опис моделі', name: 'description', placeholder: 'Детально опишіть, що потрібно створити', required: true },
      { type: 'text', label: 'Бажані розміри', name: 'size', placeholder: 'Наприклад: 100×50×30 мм' },
    ],
  },
  {
    id: 3,
    title: 'Дизайн та брендинг',
    description: 'Розробка логотипів, айдентики та візуального стилю.',
    icon: '🎯',
    category: 'Дизайн',
    categoryColor: 'bg-blue-500',
    features: ['Логотипи', 'Айдентика', 'Візуальний стиль'],
    price: 'від 1 500 грн',
    longDesc: 'Створимо унікальний дизайн для вашого бренду. Допоможемо виділитися на ринку та запам’ятатися клієнтам.',
    formFields: [
      { type: 'select', label: 'Тип дизайну', name: 'designType', options: ['Логотип', 'Айдентика', 'Упаковка', 'Комплексний брендинг'], required: true },
      { type: 'file', label: 'Завантажте бриф або референси', name: 'brief' },
      { type: 'textarea', label: 'Опис бізнесу та цільової аудиторії', name: 'description', placeholder: 'Розкажіть про ваш бізнес', required: true },
    ],
  },
  {
    id: 4,
    title: 'Постобробка виробів',
    description: 'Шліфування, фарбування, склеювання та фінішна обробка.',
    icon: '🔧',
    category: 'Обробка',
    categoryColor: 'bg-purple-500',
    features: ['Шліфування', 'Фарбування', 'Склеювання'],
    price: 'від 200 грн',
    longDesc: 'Надаємо повний цикл постобробки: шліфування, ґрунтовка, фарбування, склеювання. Ваш виріб виглядатиме як професійний продукт.',
    formFields: [
      { type: 'select', label: 'Тип обробки', name: 'processingType', options: ['Шліфування', 'Ґрунтовка', 'Фарбування', 'Склеювання', 'Комплексна'], required: true },
      { type: 'text', label: 'Розміри виробу', name: 'size', placeholder: 'Наприклад: 50×30×20 мм' },
      { type: 'text', label: 'Бажаний колір (якщо фарбування)', name: 'color', placeholder: 'Наприклад: чорний, металевий' },
    ],
  },
  {
    id: 5,
    title: 'Консультація',
    description: 'Допомога з вибором матеріалу та підготовкою до друку.',
    icon: '💡',
    category: 'Консультації',
    categoryColor: 'bg-amber-500',
    features: ['Вибір матеріалу', 'Оптимізація моделі', 'Підготовка до друку'],
    price: 'безкоштовно',
    longDesc: 'Проконсультуємо з будь-яких питань 3D-друку. Допоможемо обрати матеріал, оптимізувати модель та підготувати її до друку.',
    formFields: [
      { type: 'select', label: 'Тема консультації', name: 'topic', options: ['Вибір матеріалу', 'Оптимізація моделі', 'Підготовка до друку', 'Загальне питання'], required: true },
      { type: 'textarea', label: 'Опишіть ваше питання', name: 'description', placeholder: 'Детально опишіть, з чим вам потрібна допомога', required: true },
    ],
  },
  {
    id: 6,
    title: 'Прототипування',
    description: 'Швидке створення прототипів для тестування ідей.',
    icon: '⚙️',
    category: 'Друк',
    categoryColor: 'bg-green-500',
    features: ['Швидке прототипування', 'Тестування форми', 'Перевірка функціональності'],
    price: 'від 300 грн',
    longDesc: 'Створимо прототип вашого виробу за кілька днів. Допоможемо протестувати форму, функціональність та ергономіку.',
    formFields: [
      { type: 'select', label: 'Матеріал', name: 'material', options: ['PLA', 'ABS', 'PETG', 'TPU'], required: true },
      { type: 'file', label: 'Файл моделі (STL, OBJ, 3MF)', name: 'file', required: true },
      { type: 'text', label: 'Ціль прототипу', name: 'goal', placeholder: 'Наприклад: тестування ергономіки, перевірка збірки' },
    ],
  },
  {
    id: 7,
    title: 'Друк для ЗСУ',
    description: 'Виготовлення адаптерів, кріплень, тактичних аксесуарів.',
    icon: '🇺🇦',
    category: 'Соціальне',
    categoryColor: 'bg-red-500',
    features: ['Адаптери', 'Кріплення', 'Тактичні аксесуари'],
    price: 'волонтерська допомога',
    longDesc: 'Допомагаємо ЗСУ на волонтерських засадах. Друкуємо адаптери, кріплення, тактичні аксесуари та інші необхідні деталі.',
    formFields: [
      { type: 'select', label: 'Тип виробу', name: 'itemType', options: ['Адаптер', 'Кріплення', 'Тактичний аксесуар', 'Інше'], required: true },
      { type: 'file', label: 'Файл моделі (STL, OBJ, 3MF) або ескіз', name: 'file', required: true },
      { type: 'text', label: 'Терміновість', name: 'urgency', placeholder: 'Наприклад: терміново, стандартно' },
    ],
  },
  {
    id: 8,
    title: '3D-сканування',
    description: 'Створення цифрової копії реального об’єкта.',
    icon: '📷',
    category: 'Дизайн',
    categoryColor: 'bg-blue-500',
    features: ['Сканування об’єктів', 'Створення 3D-копій', 'Формати: STL, OBJ'],
    price: 'від 800 грн',
    longDesc: 'Створимо точну 3D-копію вашого об’єкта. Ідеально для реверс-інжинірингу, архівування або створення дублікатів.',
    formFields: [
      { type: 'textarea', label: 'Опис об’єкта для сканування', name: 'description', placeholder: 'Опишіть об’єкт, його розміри, матеріал', required: true },
      { type: 'file', label: 'Фото об’єкта (для попередньої оцінки)', name: 'photo' },
      { type: 'text', label: 'Бажана точність сканування', name: 'accuracy', placeholder: 'Наприклад: висока, середня' },
    ],
  },
];

const categories = ['Всі', 'Друк', 'Дизайн', 'Обробка', 'Консультації', 'Соціальне'];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Всі');
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderData, setOrderData] = useState<Record<string, any>>({});
  const [fileData, setFileData] = useState<{ [key: string]: File | null }>({});
  const [orderStatus, setOrderStatus] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const filtered = selectedCategory === 'Всі' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = selectedService?.formFields?.filter(f => f.required) || [];
    for (const field of requiredFields) {
      if (field.type === 'file') {
        if (!fileData[field.name]) {
          setOrderStatus(`Будь ласка, завантажте файл: ${field.label}`);
          return;
        }
      } else {
        if (!orderData[field.name]?.trim()) {
          setOrderStatus(`Будь ласка, заповніть поле: ${field.label}`);
          return;
        }
      }
    }
    
    setOrderStatus('Надсилання...');
    console.log('Замовлення:', { service: selectedService?.title, data: orderData, files: fileData });
    
    setTimeout(() => {
      setOrderStatus('✅ Дякуємо! Ми зв’яжемося з вами протягом 12 годин.');
      setOrderData({});
      setFileData({});
      setTimeout(() => {
        setOrderStatus('');
        setShowOrderForm(false);
        setSelectedService(null);
      }, 2000);
    }, 1000);
  };

  const handleFieldChange = (name: string, value: any) => {
    setOrderData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (name: string, file: File | null) => {
    setFileData(prev => ({ ...prev, [name]: file }));
  };

  const renderFormFields = () => {
    if (!selectedService?.formFields) return null;
    return selectedService.formFields.map((field, idx) => {
      switch (field.type) {
        case 'select':
          return (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} {field.required && '*'}
              </label>
              <select
                value={orderData[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                required={field.required}
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30 outline-none transition"
              >
                <option value="">Оберіть...</option>
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        case 'textarea':
          return (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} {field.required && '*'}
              </label>
              <textarea
                value={orderData[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                required={field.required}
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30 outline-none transition"
              />
            </div>
          );
        case 'file':
          return (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} {field.required && '*'}
              </label>
              <FileUpload onFileSelect={(file) => handleFileSelect(field.name, file)} />
              {fileData[field.name] && (
                <p className="text-sm text-green-600 mt-1">✅ Вибрано: {fileData[field.name]?.name}</p>
              )}
            </div>
          );
        default:
          return (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} {field.required && '*'}
              </label>
              <input
                type="text"
                value={orderData[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30 outline-none transition"
              />
            </div>
          );
      }
    });
  };

  return (
    <div ref={ref} className="pt-32 pb-20 container-custom max-w-6xl mx-auto">
      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-[#1a3c34] font-heading text-4xl md:text-5xl font-bold">Наші послуги</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-2">
          Професійний 3D-друк, дизайн, моделювання та багато іншого
        </p>
      </motion.div>

      {/* Фільтр категорій */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-[#1a3c34] text-white shadow-md shadow-[#1a3c34]/20'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Сітка послуг */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer group transition-all duration-300"
            onClick={() => setSelectedService(service)}
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{service.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${service.categoryColor}`}></span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a3c34] group-hover:text-[#2d5a4b] transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{service.description}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xl font-bold text-[#1a3c34]">{service.price}</span>
                <span className="text-sm text-gray-400 group-hover:text-[#c9a84c] transition flex items-center gap-1">
                  Детальніше <span className="text-xs">→</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>Немає послуг у цій категорії</p>
        </div>
      )}

      {/* Модальне вікно з деталями та формою заявки */}
      <AnimatePresence>
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setSelectedService(null);
              setShowOrderForm(false);
              setOrderStatus('');
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setShowOrderForm(false);
                    setOrderStatus('');
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {!showOrderForm ? (
                  // Деталі послуги
                  <>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-5xl">{selectedService.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-2 h-2 rounded-full ${selectedService.categoryColor}`}></span>
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {selectedService.category}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#1a3c34]">{selectedService.title}</h2>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-4">{selectedService.longDesc}</p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Що входить:</p>
                      <ul className="space-y-1">
                        {selectedService.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400">Вартість</p>
                        <p className="text-2xl font-bold text-[#1a3c34]">{selectedService.price}</p>
                      </div>
                      <Button onClick={() => setShowOrderForm(true)} variant="primary">
                        Замовити
                      </Button>
                    </div>
                  </>
                ) : (
                  // Форма заявки
                  <>
                    <h2 className="text-2xl font-bold text-[#1a3c34] mb-2">Замовлення послуги</h2>
                    <p className="text-gray-500 text-sm mb-4">
                      Послуга: <span className="font-semibold text-[#1a3c34]">{selectedService.title}</span>
                    </p>
                    <form onSubmit={handleOrderSubmit} className="space-y-4">
                      {/* Контактні дані */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ваше ім’я *</label>
                        <input
                          type="text"
                          value={orderData['userName'] || ''}
                          onChange={(e) => handleFieldChange('userName', e.target.value)}
                          required
                          className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30 outline-none transition"
                          placeholder="Іван Петренко"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон *</label>
                        <input
                          type="tel"
                          value={orderData['userPhone'] || ''}
                          onChange={(e) => handleFieldChange('userPhone', e.target.value)}
                          required
                          className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30 outline-none transition"
                          placeholder="+380 67 123 45 67"
                        />
                      </div>

                      {/* Специфічні поля для послуги */}
                      {renderFormFields()}

                      <Button type="submit" variant="primary" className="w-full py-3">
                        {orderStatus || 'Надіслати заявку'}
                      </Button>
                      {orderStatus && (
                        <p className={`text-center text-sm ${orderStatus.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
                          {orderStatus}
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowOrderForm(false)}
                        className="text-sm text-gray-400 hover:text-gray-600 transition w-full text-center"
                      >
                        ← Повернутися до опису
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Кнопка зв'язку внизу */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-500 text-sm mb-4">Не знайшли потрібну послугу?</p>
        <Button href="/contacts" variant="secondary">
          Зв'язатися з нами
        </Button>
      </motion.div>
    </div>
  );
}