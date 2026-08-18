# EventSphere — Full-Stack Website

A premium, responsive event-management website built with:

- React + Vite
- Framer Motion animations
- Lucide icons
- Express API
- SQLite database
- Helmet security headers
- CORS allow-list
- Rate limiting
- JWT-protected admin inquiry endpoint

## 1. Requirements

Install Node.js LTS first. Then open this project in VS Code.

Recommended structure:

EventSphere-Website/
  client/
  server/

## 2. Start the backend

Open a terminal:

```bash
cd server
npm install
copy .env.example .env
```

Open `server/.env` and change:

- JWT_SECRET
- ADMIN_EMAIL
- ADMIN_PASSWORD

Then:

```bash
npm run dev
```

The API will run at:

http://localhost:5000

Test:

http://localhost:5000/api/health

## 3. Start the frontend

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally:

http://localhost:5173

The frontend proxies `/api` calls to the Express backend.

## 4. What is already implemented

### Public pages

- Home
- About Us
- Services
- Portfolio & Contact
- Privacy Policy

### Home

- Luxury hero
- EventSphere logo
- Animated entrance
- CTA buttons
- Introduction
- Six services
- Why Choose Us
- Featured event mosaic
- Final CTA

### Services

- Six detailed service sections
- Real event photography from the supplied assets
- Responsive layout
- Hover/scroll animations

### Portfolio & Contact

- Six-image gallery
- Testimonials
- Contact details
- Event inquiry form
- Backend submission
- Success/error states

### Backend

- `GET /api/health`
- `POST /api/inquiries`
- `POST /api/admin/login`
- `GET /api/admin/inquiries`

Inquiry data is stored in:

`server/data/eventsphere.db`

## 5. Security notes

The project includes:

- Helmet
- CORS restriction
- JSON body-size limit
- Rate limiting
- Input validation and length limits
- Parameterized SQLite queries
- JWT for admin inquiry access
- No passwords stored in the database
- Privacy page

Before production:

1. Set a strong random JWT secret.
2. Set a strong unique admin password.
3. Replace `CLIENT_ORIGIN` with the real HTTPS domain.
4. Replace placeholder social links with real EventSphere accounts.
5. Use HTTPS.
6. Put the API behind a reverse proxy such as Nginx or a managed platform.
7. Back up the SQLite database or move to PostgreSQL for high traffic.
8. Add server-side logging/monitoring.
9. Configure a real transactional email provider if inquiry emails are required.

## 6. Important

The social links in the template are intentionally `#` placeholders because real social profile URLs were not supplied. Replace them before launch.

The phone, email and Karachi location are based on the information supplied for this website. If any are placeholders, update them in:

- `client/src/components/Footer.jsx`
- `client/src/pages/PortfolioContact.jsx`

## 7. Build for production

Frontend:

```bash
cd client
npm run build
```

Backend:

```bash
cd server
npm start
```

The frontend build is generated in `client/dist`.

## 8. Admin API

Login:

POST `/api/admin/login`

Body:

```json
{
  "email": "your-admin-email",
  "password": "your-admin-password"
}
```

Use the returned JWT as:

```text
Authorization: Bearer YOUR_TOKEN
```

Then request:

GET `/api/admin/inquiries`

For a real business, create a proper admin UI and use HTTPS before exposing the admin endpoint publicly.
