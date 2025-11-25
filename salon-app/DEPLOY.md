# Deployment Instructions

This application is configured for **Static Export** and supports two deployment scenarios.

## 1. Live Demo (GitHub Pages)
This repository includes a GitHub Action that automatically deploys the app to GitHub Pages whenever you push to `main`.

**How to enable:**
1.  Push this code to your GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The action will run automatically. Once finished, your site will be live at `https://<username>.github.io/<repo-name>/`.
    *   *Note:* The workflow automatically detects your repository name and configures the app to run under that path.

## 2. Integration into Main Website (Manual)
To deploy this app as a sub-section (e.g., `/booking`) of another website:

1.  **Build the Project:**
    Run the following command locally:
    ```bash
    # This defaults to basePath: '/booking'
    npm run build
    ```

2.  **Copy Files:**
    -   Take the contents of the generated `out` folder.
    -   Paste them into a folder named `booking` in your main website's public directory.

## Configuration Details
- **Output Mode:** `export` (Static HTML)
- **Base Path:**
    -   Defaults to `/booking` (defined in `next.config.ts`).
    -   Overridden to `/<repo-name>` during GitHub Actions build for the demo.
