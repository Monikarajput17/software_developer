# Lead Capture Setup

The contact form is ready to send every lead to one Google Apps Script URL.

That Apps Script will:

- Save the lead in a Google Sheet
- Send the same lead details to your email

## Setup

1. Create a Google Sheet named `MONIKA.DEV Leads`.
2. In the sheet, open `Extensions > Apps Script`.
3. Paste the code from `google-apps-script/lead-capture.gs`.
4. Replace `your-email@example.com` with the email where you want lead notifications.
5. Click `Deploy > New deployment`.
6. Select `Web app`.
7. Set `Execute as` to `Me`.
8. Set `Who has access` to `Anyone`.
9. Deploy and copy the Web App URL.
10. Add that URL to your website environment variable:

```env
VITE_LEAD_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_WEB_APP_ID/exec
```

For local testing, create `.env` from `.env.example` and restart the dev server.

For deployment, add the same environment variable in your hosting provider.
