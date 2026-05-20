export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 container-custom">
      <h1 className="text-center mb-6">Блог</h1>
      <p className="text-center text-gray-400 mb-12">
        Статті про AI-маркетинг, рекламу, кейси та тренди.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-darker rounded-xl overflow-hidden border border-gray-800 hover:border-neonBlue transition">
            <div className="h-48 bg-gradient-to-r from-neonBlue/20 to-neonPurple/20"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Приклад статті {i}</h3>
              <p className="text-gray-400 text-sm">Короткий опис статті про маркетинг та AI.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}