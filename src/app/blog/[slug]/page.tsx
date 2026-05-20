export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-32 pb-20 container-custom max-w-3xl mx-auto">
      <h1 className="mb-6">Стаття: {params.slug}</h1>
      <div className="prose prose-invert">
        <p>Тут буде повний текст статті. Це динамічна сторінка для SEO.</p>
      </div>
    </div>
  );
}