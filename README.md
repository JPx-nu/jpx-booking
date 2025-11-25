# Skönhetspalatset

A modern beauty salon website with an integrated, seamless booking system.

## 🌟 Overview

**Skönhetspalatset** (The Beauty Palace) is a comprehensive web application designed for beauty salons. It features a beautiful landing page to showcase services and stylists, along with a fully functional booking wizard that allows clients to schedule appointments with ease.

## 🚀 Features

-   **Modern Landing Page**: Responsive and aesthetic design to attract customers.
-   **Integrated Booking System**: A step-by-step wizard for clients to book services (`/book`).
-   **Staff Dashboard**: A dedicated portal for staff to manage their schedules and view appointments (`/staff`).
-   **Client-Side Logic**: Runs entirely in the browser (MVP), making it easy to deploy anywhere without complex backend setup.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Date Management**: [date-fns](https://date-fns.org/)

## 📦 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JPx-nu/jpx-booking.git
    cd jpx-booking
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

This project is configured for **Static Export**, making it perfect for GitHub Pages, Vercel, or Netlify.

### GitHub Pages

1.  Push your code to GitHub.
2.  Go to **Settings** > **Pages**.
3.  Choose **GitHub Actions** as the source.
4.  The site will be deployed to `https://<username>.github.io/<repo-name>/`.

### Standalone Booking Demo

If you wish to demo *only* the booking system, you can direct users to the `/book` route (e.g., `https://your-site.com/book`). The booking wizard functions independently of the landing page.

## 📄 License

MIT
