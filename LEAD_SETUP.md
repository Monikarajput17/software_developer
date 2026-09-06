# Lead Capture Setup

The contact form is ready to send every lead to one Google Apps Script URL.

That Apps Script will:

- Save the lead in a Google Sheet
- Send the same lead details to your email

## Setup

1. Open your Google Sheet.
2. In the sheet, open `Extensions > Apps Script`.
3. Paste the code from `google-apps-script/lead-capture.gs`.
4. Confirm `LEAD_EMAIL_TO` is your email.
5. Confirm `LEAD_SPREADSHEET_ID` is your Google Sheet ID.
6. Save the Apps Script project.
7. Click `Deploy > New deployment`.
8. Select `Web app`.
9. Set `Execute as` to `Me`.
10. Set `Who has access` to `Anyone`.
11. Deploy and copy the Web App URL.
12. Add that URL to your website environment variable:

```env
VITE_LEAD_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_WEB_APP_ID/exec
```

For local testing, create `.env` from `.env.example` and restart the dev server.

For deployment, add the same environment variable in your hosting provider.

## If leads are not showing

If the endpoint returns `401 Unauthorized`, open Apps Script and deploy again:

- `Deploy > Manage deployments`
- Edit the Web App deployment
- `Execute as`: `Me`
- `Who has access`: `Anyone`
- Save/deploy

After redeploying, open the Web App URL in a browser. It should show:

```json
{"ok":true,"message":"MONIKA.DEV lead capture is live","sheetName":"Website Leads"}
```
