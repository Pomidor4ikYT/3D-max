import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    // Тут можна підключити реальний AI (OpenAI, Gemini тощо)
    // Поки що проста відповідь-заглушка
    const reply = `Дякуємо за запитання: "${message}". Наш менеджер зв'яжеться з вами найближчим часом.`;
    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Помилка сервера' }, { status: 500 });
  }
}