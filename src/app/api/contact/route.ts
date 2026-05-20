import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Заявка:', body);
  // Тут додайте інтеграцію з CRM, Telegram або email
  return NextResponse.json({ success: true });
}