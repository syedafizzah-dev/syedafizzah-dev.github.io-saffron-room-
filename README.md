# The Saffron Room

A responsive, single-page website for a fictional elite café in Karachi. Built with plain HTML, CSS and JavaScript, with no frameworks or build step.

## Features

- Hero section with an animated SVG coffee cup
- Our story section
- Tabbed menu (Coffee, Pastries, Brunch) with prices in PKR
- Table reservation form with validation
- Visit section with address, hours and contact details
- Fully responsive, with a mobile navigation menu
- Keyboard accessible, and respects `prefers-reduced-motion`

## Project structure

```
saffron-room/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/saffron-room.git
   cd saffron-room
   ```
2. Open `index.html` in your browser. No installation is needed.

## Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/saffron-room/`.

## Customise

- **Name, address, phone, email:** edit `index.html`.
- **Colours and fonts:** change the variables at the top of `css/style.css` (`--green`, `--saffron`, `--ivory`, etc.).
- **Menu items and prices:** edit the `.item` rows inside the `#menu` section of `index.html`.
- **Reservation form:** it only shows a confirmation message. To receive real bookings, connect `js/main.js` to your backend or a form service such as Formspree.

## Tech stack

HTML5, CSS3 (Grid and Flexbox), vanilla JavaScript, and Google Fonts (Bodoni Moda and Jost).

## License

Released under the MIT License. Free to use and modify.
