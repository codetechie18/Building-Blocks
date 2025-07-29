 # Real-Time Crime Reporting & Heatmap Analysis Platform (MERN + AI)

A full-stack crime monitoring system where users can report real-time incidents with location, photos, and descriptions. The platform uses heatmaps to show unsafe zones and alerts nearby users. Includes AI integration for automated threat level prediction and content moderation.

---

##  Features

###   User Roles
- **Citizen**: Report/view crimes, receive alerts
- **Admin**: Verify, moderate, and update crime reports
- **Police**: Respond to verified incidents

###   Functional Modules
- Real-time **crime reporting** with geolocation + media upload
- Dynamic **heatmaps** (Leaflet/Google Maps)
- **AI-powered** threat prediction (based on severity, location)
- **Content moderation AI** (to prevent spam/fake reports)
- **Authentication** via JWT
- **Crime Trends Dashboard** (Weekly/Monthly Graphs)
- **Admin Panel** for review & status updates
- Notification system (Email / SMS / Push optional)

---

##   Frontend Pages (React + Vite + Tailwind CSS)

### Landing Page (5 sections)

> Only login/signup options before authentication

1. **Hero** – Bold intro with CTA (Call to Action)
2. **Features** – Show platform features (heatmap, AI, etc.)
3. **How It Works** – Explain steps: Report → Review → Respond
4. **Testimonials / Social Proof** – Feedback or safety stats
5. **Footer** – About | Contact | Socials

### Post Login Pages

| Page Name          | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `Dashboard.jsx`    | User-specific dashboard (citizen/police/admin)                              |
| `ReportCrime.jsx`  | Form to report crime with location/image                                    |
| `Heatmap.jsx`      | Interactive heatmap of reported incidents                                   |
| `CrimeStats.jsx`   | Graphs for crime trends (using Recharts / Chart.js)                         |
| `AdminPanel.jsx`   | Admin page for verifying, editing, deleting reports                         |
| `Alerts.jsx`       | Push alerts and past incident notifications                                 |
| `Profile.jsx`      | User details, change password, delete account, etc.                         |

---

##    Color & UI Theme

- **Primary Gradient**: `#2C3E50 → #4CA1AF` (Navy Blue to Cyan)
- **Accent Color**: `#FF6B6B` (for alerts, danger)
- **Font**: `Inter` or `Poppins`
- Use **glassmorphism** effect for cards and panels
- Responsive layout with **Tailwind CSS** utilities

---

##   AI Integrations

### 1. Threat Level Prediction
- Input: Text description + location + time
- Output: Threat score (Low/Medium/High)
- Model: Pre-trained classification model (TensorFlow.js / Hugging Face API)

### 2. Content Moderation
- Flag inappropriate language or spam in reports
- Optionally use OpenAI moderation or open-source models

---

##  Tech Stack

| Layer        | Technologies                                 |
|--------------|----------------------------------------------|
| Frontend     | React.js, Vite, Tailwind CSS, Axios, Leaflet |
| Backend      | Node.js, Express.js, JWT Auth, Multer        |
| Database     | MongoDB + Mongoose                           |
| AI Layer     | Python/Node backend using TF.js or APIs      |
| Maps         | Leaflet.js or Google Maps JS API             |
| Charts       | Chart.js / Recharts                          |

 

