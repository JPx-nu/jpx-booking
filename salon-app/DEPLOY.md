# Deployment Instructions

This application has been configured for **Static Export** to function as a sub-section of your main website.

## Configuration Details
- **Output Mode:** Static HTML (`output: 'export'`)
- **Base Path:** `/booking` (The app expects to be served from `https://yoursite.com/booking`)
- **Image Optimization:** Disabled (Required for static export)

## How to Deploy

### Option 1: Manual Deployment (Copy-Paste)
1.  **Build the Project:**
    Run the following command in the `salon-app` directory:
    ```bash
    npm run build
    ```
    This will generate an `out` folder containing the static website.

2.  **Integrate with Main Repo:**
    -   Go to your main website's repository (`JPx-nu/jpx-main-site`).
    -   Create a folder named `booking` in the public root of your site (or wherever static files are served).
    -   **Copy the entire contents of the `out` folder** into this new `booking` folder.
    -   *Note:* If your main site is also a Next.js app, you might put this in `public/booking`. If it's a plain HTML site, just put it at the root as `booking/`.

3.  **Commit and Push:**
    Commit the changes to your main repository. GitHub Pages (or your host) should serve the app at `.../booking`.

### Option 2: GitHub Actions (Automated)
If you want to automate this, you can set up a workflow in your main repo that checks out this code, builds it, and moves the `out` folder to the right place before deploying.

## Troubleshooting
-   **Broken Styles/Links:** If the app loads but styles are missing, ensure the folder name on your live site exactly matches the `basePath` configured in `next.config.ts` (`/booking`). If you rename the folder on the server, you must update `basePath` and rebuild.
