import ContactForm from '@/components/forms/ContactForm';
import Button from '@/components/ui/Button';

export default function ContactsPage() {
  return (
    <div className="pt-32 pb-20 container-custom">
      <h1 className="text-center mb-6 gradient-text">Контакти</h1>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <p className="text-gray-300 mb-6">Зв’яжіться з нами зручним способом</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">📞 +380 (67) 123-45-67</li>
            <li className="flex items-center gap-2">✉️ hello@pr-tut.com</li>
            <li className="flex items-center gap-2">📱 Telegram: @pr_tut</li>
            <li className="flex items-center gap-2">📷 Instagram: @pr.tut</li>
          </ul>
          <div className="mt-8"><Button href="https://t.me/pr_tut" variant="primary">Написати в Telegram</Button></div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}