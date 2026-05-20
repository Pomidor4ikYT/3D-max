import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'PR.тут - Маркетингова агенція',
  description: 'Ми приводимо клієнтів, які купують. AI-маркетинг, реклама, брендинг.',
  openGraph: {
    title: 'PR.тут',
    description: 'Маркетингова агенція нового покоління',
    type: 'website',
    locale: 'uk_UA',
  },
};

export const generateCaseMetadata = (title: string, description: string): Metadata => ({
  title: `${title} | Кейси PR.тут`,
  description,
});