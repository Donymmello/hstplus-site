import nodemailer from 'nodemailer';

// Configuração genérica por SMTP — funciona com Gmail (app password), Resend,
// SendGrid, Zoho, ou qualquer outro fornecedor que exponha um relay SMTP.
// Ver server/.env.example para os passos de configuração de cada opção.
let transporter = null;
let warnedMissingConfig = false;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    if (!warnedMissingConfig) {
      console.warn(
        '[mailer] SMTP não configurado (SMTP_HOST/SMTP_USER/SMTP_PASS em falta) — ' +
          'leads continuam a ser gravados normalmente, mas nenhum email de notificação será enviado. ' +
          'Ver server/.env.example.'
      );
      warnedMissingConfig = true;
    }
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

const TIPO_LABEL = { informacoes: 'Pedido de Informações', cotacao: 'Pedido de Cotação', proposta: 'Pedido de Proposta' };

function buildEmail(lead) {
  const tipo = TIPO_LABEL[lead.type] || 'Novo contacto';
  const linhas = [
    ['Tipo', tipo],
    ['Curso', lead.course || '—'],
    ['Nome', lead.nome],
    ['Email', lead.email],
    ['Telefone', lead.telefone],
    ['Organização', lead.organizacao],
    ['Cargo', lead.cargo || '—'],
  ];

  const text = [
    `${tipo} — recebido via site HST Plus`,
    '',
    ...linhas.map(([k, v]) => `${k}: ${v}`),
    '',
    'Mensagem:',
    lead.mensagem || '(sem mensagem)',
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #14181A;">
      <h2 style="color:#7A1420; margin-bottom: 4px;">${tipo}</h2>
      <p style="color:#666; margin-top:0;">Recebido via site HST Plus</p>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${linhas.map(([k, v]) => `<tr><td style="color:#666; vertical-align:top;"><strong>${k}</strong></td><td>${v}</td></tr>`).join('')}
      </table>
      <p><strong>Mensagem:</strong><br/>${(lead.mensagem || '(sem mensagem)').replace(/\n/g, '<br/>')}</p>
    </div>
  `;

  return { subject: `${tipo} — ${lead.nome} (${lead.organizacao})`, text, html };
}

// Nunca lança erro para quem chama — falha de email não pode derrubar o
// registo do lead, que já foi gravado em cache/leads.json antes disto correr.
export async function sendLeadNotification(lead) {
  const t = getTransporter();
  const to = process.env.LEADS_NOTIFY_TO;
  if (!t || !to) return { sent: false, reason: 'not_configured' };

  const { subject, text, html } = buildEmail(lead);
  try {
    await t.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      replyTo: lead.email,
      subject,
      text,
      html,
    });
    return { sent: true };
  } catch (e) {
    console.error('[mailer] falha ao enviar notificação de lead:', e.message);
    return { sent: false, reason: e.message };
  }
}