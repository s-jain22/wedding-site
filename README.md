# Sonali & Thomas — Wedding Site

Static information site for our guests. Wedding: **22–23 February 2027, Ridhi Resort, Jaipur**.

## Structure

```
index.html              # single-page site (all sections)
assets/css/styles.css   # styling
assets/js/main.js       # mobile nav
.github/workflows/      # GitHub Pages deploy
```

No build step — it's plain HTML/CSS/JS.

## Local preview

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (GitHub Pages — to set up later)

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

## To fill in

- Confirmed event timings
- Full venue address
- Recommended hotels + booking details
- Outfit rental partners and links
- Contact email (currently `hello@example.com`)
