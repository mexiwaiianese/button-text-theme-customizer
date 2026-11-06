# Mail Club Studio

Independent button text color customization for Mail Club Studio.

This is the GitHub source of truth for the frontend, ready to replace the ChatGPT Sites deployment on **mailclubstudio.com**.

## Key feature
Users (club owners) can customize:
- Page text color (`--text-color`)
- Button text color (`--button-text-color`) — fully separate
- Button background

## Deploy to Vercel (replace ChatGPT Sites)
1. Create a new Vercel project.
2. Import this repository: `mexiwaiianese/button-text-theme-customizer`
3. Framework preset: **Other** (static HTML).
4. Deploy.
5. In the project **Domains** settings, add `mailclubstudio.com` (and `www.mailclubstudio.com` if needed).
6. Follow Vercel’s DNS instructions to point the domain away from ChatGPT Sites / Cloudflare and onto Vercel.

Once the domain is verified, the site will be served from GitHub → Vercel.

## Next steps for full product
This is currently a themed demo. For the full multi-tenant Mail Club Studio (admin, Stripe, member areas, etc.), we can expand this repo or migrate the existing logic into it.
