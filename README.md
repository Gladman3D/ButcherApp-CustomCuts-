# Butcher App — Custom Cuts

Simple static starter for the "Butcher App" front-end. This repository currently contains a minimal HTML landing page you can use as the basis for a local ordering UI.

## What this is

A small static HTML scaffold meant to be extended into a client for ordering custom meat cuts from local butchers. It is intentionally minimal so you can adapt the structure and assets to your needs.

## Run locally

1. Clone the repository:

   git clone https://github.com/Gladman3D/ButcherApp-CustomCuts-.git
   cd ButcherApp-CustomCuts-

2. Open `index.html` in your browser, or serve the folder with a static server:

   python -m http.server 8000
   # then open http://localhost:8000

## Development notes

- Replace the placeholder sections in `index.html` with real UI components (separate CSS/JS files as needed).
- If you plan to add a backend/API, create a `src/` or `api/` folder and document the API contract in `README.md` or an `API.md` file.
- Consider adding a build toolchain (Vite, Webpack, etc.) when the project grows beyond static assets.

## Next steps you might want

- Add a simple JavaScript-driven product list and order form (`js/app.js`).
- Add a `LICENSE` and `CONTRIBUTING.md`.
- Enable GitHub Pages in the repository settings to host the static site.

## License

Add a license file (e.g., MIT) if you want to make this project open source.
