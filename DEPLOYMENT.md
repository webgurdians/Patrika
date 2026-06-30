# Patrika Media Deployment Notes

## Required environment variables

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `LEAD_NOTIFICATION_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_CALENDAR_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_CLARITY_ID`

## Deployment

1. Create a Vercel project from this repository.
2. Add the environment variables above.
3. Replace the default `siteConfig.url` value in `src/lib/site-data.ts` with the production domain.
4. Run `npm run build` locally or through Vercel before launch.

## Lead storage

This starter stores leads in `data/leads.json` so the form works immediately during development. For production persistence on Vercel, swap `storeLead` in `src/lib/contact.ts` to your preferred hosted database.
