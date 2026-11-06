# Button Text Color Customizer

A simple demo showing how to let users customize the color of text on buttons **separately** from the color of text on the rest of the page.

## How it works

Uses CSS custom properties (variables):

- `--text-color` — controls general page text
- `--button-text-color` — controls button text independently
- `--button-bg` — button background

A settings panel updates these variables live and persists them in `localStorage`.

## Files

- `index.html` — main page
- `style.css` — styles and CSS variables
- `script.js` — theme application and persistence

## Deploy to Vercel

1. Connect this GitHub repository to a new Vercel project.
2. Framework preset: Other (static).
3. Deploy.

You can later point an existing Vercel project at this GitHub repo instead of ChatGPT Sites.
