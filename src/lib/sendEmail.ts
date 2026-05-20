export async function sendEmail(data: { name: string; phone: string; message?: string }) {
  // Тут можна додати реальну інтеграцію з email-сервісом (SendGrid, Resend, nodemailer)
  console.log('Відправка листа:', data);
  // Імітація успіху
  return { success: true };
}