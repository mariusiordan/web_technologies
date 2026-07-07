# Web Mini-Project

A starter web project: an Express server that serves a static HTML/CSS/JS
front-end and exposes one example API route.

## Structure
```
web-miniproject/
├── package.json      # project info + dependencies + run scripts
├── server.js         # the Express server
└── public/           # everything the browser sees
    ├── index.html
    ├── style.css
    └── script.js
```

## Run it
```bash
npm install      # installs Express (creates node_modules/)
npm start        # starts the server
```
Then open http://localhost:3000 in your browser.

Use `npm run dev` instead of `npm start` to auto-restart on file changes
(needs Node 18.11 or newer).

## How it fits together
- `server.js` serves the `public/` folder, so visiting `/` returns `index.html`.
- `script.js` calls the `/api/hello` route with `fetch()`.
- `server.js` answers with JSON, and the page shows it.

That request → response loop is the core pattern; build your project by
adding more routes in `server.js` and more pages/scripts in `public/`.