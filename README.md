# Butcher App — Custom Cuts

Simple static starter for the "Butcher App" front-end. This repository contains a minimal HTML landing page and a small client-side scaffold to demo browsing products and placing a local (client-side) order.

## What this is

A small static HTML scaffold meant to be extended into a client for ordering custom meat cuts from local butchers. The starter includes:

- index.html — entry point
- css/styles.css — basic styles
- js/app.js — minimal client-side logic (loads data/products.json)
- data/products.json — sample product data (static)

## Run locally

1. Clone the repository:

   git clone https://github.com/Gladman3D/ButcherApp-CustomCuts-.git
   cd ButcherApp-CustomCuts-

2. Serve the folder with a static server and open it in your browser:

   python -m http.server 8000
   # then open http://localhost:8000

The site fetches a local JSON file at `/data/products.json` to populate the product list.

## Development notes

- Replace placeholder UI in `index.html` with your real components and wire up a backend API for orders.
- The `js/app.js` is intentionally small; when the app grows consider adding a bundler (Vite, Parcel) and a module structure under `src/`.
- Add a `LICENSE` (already included), `CONTRIBUTING.md`, and tests as needed.

## Next steps

- Add authentication and an API endpoint to accept orders.
- Add images and better product metadata (weight options, cut types).
- Add automated deployments (GitHub Pages or other static hosting).
