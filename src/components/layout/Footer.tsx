import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a3c34] border-t border-[#c9a84c]/20 py-16 text-white">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-serif font-bold text-[#c9a84c] mb-4">3D-друк</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Якісний 3D-друк на замовлення. Іграшки, прототипи, допомога ЗСУ.</p>
          <p className="text-gray-400 text-xs mt-4">© 2026 — Всі права захищені.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#c9a84c] mb-3">Навігація</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-gray-300 hover:text-[#7ec8a3] transition">Головна</Link></li>
            <li><Link href="#about" className="text-gray-300 hover:text-[#7ec8a3] transition">Про нас</Link></li>
            <li><Link href="/gallery" className="text-gray-300 hover:text-[#7ec8a3] transition">Галерея</Link></li>
            <li><Link href="/order" className="text-gray-300 hover:text-[#7ec8a3] transition">Замовити друк</Link></li>
            <li><Link href="/contacts" className="text-gray-300 hover:text-[#7ec8a3] transition">Контакти</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#c9a84c] mb-3">Корисне</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-[#7ec8a3] transition">Політика конфіденційності</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#7ec8a3] transition">Умови використання</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#7ec8a3] transition">Доставка та оплата</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#c9a84c] mb-3">Контакти</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📞 +380 (67) 123-45-67</li>
            <li>✉️ hello@3dprint.com</li>
            <li>📱 Telegram: @3d_print</li>
            <li>📷 Instagram: @3d_print_ua</li>
          </ul>
          <p className="text-gray-400 text-xs mt-4">Пн-Пт 9:00-18:00</p>
        </div>
      </div>
    </footer>
  );
}