Deployment to Cloudflare (recommended)

This project is built to run on Cloudflare Workers (the server bundle in `dist/server`). Netlify static hosting will only serve the client bundle and cannot run the Worker SSR server.

Quick deploy steps (manual):

1. Install Wrangler CLI and login:

```bash
npx wrangler login
```

2. Build the project:

```bash
npm run build
```

3. Publish the Worker (uses the generated `dist/server/wrangler.json` config):

```bash
npx wrangler publish --config dist/server/wrangler.json
```

4. (Optional) Serve static client assets via Cloudflare Pages:

```bash
npx wrangler pages publish dist/client --branch=main
```

Notes:
- You need a Cloudflare account and the Wrangler CLI authorized (`npx wrangler login`).
- CI/CD: connect your GitHub repo to Cloudflare Pages for automatic deploys, and add a workflow to publish the Worker after a successful build.

If you'd rather keep using Netlify, I can re-target the server build for Netlify Functions (more work). Tell me which option you prefer and I will implement the next steps.
