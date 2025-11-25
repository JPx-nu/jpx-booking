# Skönhetspalatset - Booking System Demo

This repository contains the source code for the Skönhetspalatset booking system MVP. It is configured for **Static Export** and can be deployed to GitHub Pages or any static host.

## 🚀 Live Demo URLs

Once deployed to GitHub Pages (assuming your repo is `jpx-main-site`):

-   **Main App (Landing Page):**
    `https://JPx-nu.github.io/jpx-main-site/`
    *(Note: If you configured the basePath to default to `/booking` in production, this might be `.../jpx-main-site/booking/`)*

-   **Direct Link to Booking Wizard:**
    `https://JPx-nu.github.io/jpx-main-site/book`
    *(Or `.../booking/book` depending on the path strategy chosen)*

## 📦 How to Deploy

### Option 1: Automatic GitHub Pages Demo (Recommended)
1.  Push this branch (`final-demo-ready`) to GitHub.
2.  Go to **Settings** > **Pages**.
3.  Set Source to **GitHub Actions**.
4.  The site will be live at `https://<username>.github.io/<repo-name>/`.

### Option 2: Integrate into Main Website
To run this as a standalone "Booking App" inside your main website (e.g., at `yoursite.com/booking`):

1.  **Build Locally:**
    ```bash
    cd salon-app
    npm run build
    ```
    *(This uses the default config with `basePath: '/booking'`)*

2.  **Deploy:**
    Copy the contents of `salon-app/out/` into the `public/booking/` folder of your main website's repository.

## 🛠 Features
-   **Customer Booking:** Full wizard flow (Service -> Staff -> Time -> Confirm).
-   **Staff Dashboard:** Weekly schedule management and block-out capabilities.
-   **No Backend Required:** Runs entirely in the browser using `localStorage`.
