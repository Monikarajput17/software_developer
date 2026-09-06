const LEAD_SHEET_NAME = 'Website Leads';
const LEAD_EMAIL_TO = 'devimonika17may@gmail.com';

const LEAD_COLUMNS = [
  'Submitted At',
  'Name',
  'Company',
  'Email',
  'Phone / WhatsApp',
  'Industry',
  'Requirement',
  'Current Software / Process',
  'Budget',
  'Problem',
  'Build Or Customize',
  'Message',
  'Source'
];

function doPost(event) {
  try {
    const lead = JSON.parse(event.postData.contents || '{}');
    const sheet = getLeadSheet_();
    const row = [
      lead.submittedAt || new Date().toISOString(),
      lead.name || '',
      lead.company || '',
      lead.email || '',
      lead.phone || '',
      lead.industry || '',
      lead.requirement || '',
      lead.currentProcess || '',
      lead.budget || '',
      lead.problem || '',
      lead.build || '',
      lead.message || '',
      lead.source || ''
    ];

    sheet.appendRow(row);
    sendLeadEmail_(lead);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, error: error.message });
  }
}

function getLeadSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(LEAD_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(LEAD_SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(LEAD_COLUMNS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function sendLeadEmail_(lead) {
  const subject = `New website lead: ${lead.name || 'Unknown name'}${lead.company ? ` - ${lead.company}` : ''}`;
  const body = [
    'New lead received from MONIKA.DEV website.',
    '',
    `Name: ${lead.name || ''}`,
    `Company: ${lead.company || ''}`,
    `Email: ${lead.email || ''}`,
    `Phone / WhatsApp: ${lead.phone || ''}`,
    `Industry: ${lead.industry || ''}`,
    `Requirement: ${lead.requirement || ''}`,
    `Current Software / Process: ${lead.currentProcess || ''}`,
    `Budget: ${lead.budget || ''}`,
    '',
    'Problem:',
    lead.problem || '',
    '',
    'What they want to build or customize:',
    lead.build || '',
    '',
    'Message:',
    lead.message || '',
    '',
    `Source: ${lead.source || ''}`,
    `Submitted At: ${lead.submittedAt || new Date().toISOString()}`
  ].join('\n');

  MailApp.sendEmail(LEAD_EMAIL_TO, subject, body, {
    replyTo: lead.email || undefined,
    name: 'MONIKA.DEV Lead Capture'
  });
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
