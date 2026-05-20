import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-red/30 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-black gradient-text mb-4">PR.тут</h3>
          <p className="text-gray-400 text-sm">AI-маркетинг, реклама, брендинг, 3D-друк. Приводимо клієнтів, які купують.</p>
          <p className="text-gray-500 text-xs mt-4">© PR.тут — Всі права захищені.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Навігація</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-red transition">Головна</Link></li>
            <li><Link href="/services" className="hover:text-red transition">Послуги</Link></li>
            <li><Link href="/cases" className="hover:text-red transition">Кейси</Link></li>
            <li><Link href="/ai-solutions" className="hover:text-red transition">AI-рішення</Link></li>
            <li><Link href="/about" className="hover:text-red transition">Про нас</Link></li>
            <li><Link href="/blog" className="hover:text-red transition">Блог</Link></li>
            <li><Link href="/contacts" className="hover:text-red transition">Контакти</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Послуги</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-red transition">SMM</Link></li>
            <li><Link href="/services" className="hover:text-red transition">SEO</Link></li>
            <li><Link href="/services" className="hover:text-red transition">Google Ads</Link></li>
            <li><Link href="/services" className="hover:text-red transition">AI Маркетинг</Link></li>
            <li><Link href="/services" className="hover:text-red transition">Брендинг</Link></li>
            <li><Link href="/services" className="hover:text-red transition">3D друк</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Контакти</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 +380 (67) 123-45-67</li>
            <li>✉️ hello@pr-tut.com</li>
            <li>📱 Telegram: @pr_tut</li>
            <li>📷 Instagram: @pr.tut</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red transition">Telegram</a>
            <a href="#" className="hover:text-red transition">Instagram</a>
            <a href="#" className="hover:text-red transition">Facebook</a>
            <a href="#" className="hover:text-red transition">LinkedIn</a>
          </div>
          <p className="text-gray-500 text-xs mt-6">Робочі години: Пн-Пт 9:00-18:00</p>
        </div>
      </div>
    </footer>
  );
}