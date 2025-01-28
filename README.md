# Ticketing Application for Computer Repair Shop

This ticketing application is designed to streamline ticket management for computer repair shops. Managers can create tickets, assign them to technicians, and track their progress, while technicians can view and manage their assigned tickets with ease.

## Features

- **Manager Panel:** Create and assign tickets to technicians.
- **Technician Panel:** View and update assigned tickets.
- **Authentication:** Secure access with Kinde.
- **Form Handling:** Robust validation with React Hook Form and Zod.
- **Monitoring:** Real-time error tracking using Sentry.
- **Responsive Design:** Styled with TailwindCSS and Shadcn UI for a seamless experience on all devices.

## Tech Stack

- **Frontend:** Next.js
- **Backend:** PostgreSQL (via NeonDB)
- **Styling:** TailwindCSS, Shadcn UI
- **Authentication:** Kinde
- **Form Validation:** React Hook Form, Zod
- **Monitoring:** Sentry


## Getting Started

Follow the steps below to set up and run the application locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (v18 or later)
- PostgreSQL
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/satyam95/ticketing
   cd ticketing-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   - `SENTRY_AUTH_TOKEN`
   - `SENTRY_DSN_URL`
   - `KINDE_CLIENT_ID`
   - `KINDE_CLIENT_SECRET`
   - `KINDE_ISSUER_URL`
   - `KINDE_SITE_URL`
   - `KINDE_POST_LOGOUT_REDIRECT_URL`
   - `KINDE_POST_LOGIN_REDIRECT_URL`
   - `DATABASE_URL`
   - `KINDE_DOMAIN`
   - `KINDE_MANAGEMENT_CLIENT_ID`
   - `KINDE_MANAGEMENT_CLIENT_SECRET`
   ```

4. Run database migrations with Drizzle:

   ```bash
   npx drizzle migrate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.
