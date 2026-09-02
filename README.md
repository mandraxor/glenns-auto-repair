# Glenn's Automotive Repair and Maintenance - Website Redesign

Modern, high-converting, mobile-first website redesign for **Glenn's Automotive Repair and Maintenance**, an established auto repair shop located in Las Vegas, NV.

📍 **Address**: 4125 Arctic Spring Ave. Unit 11, Las Vegas, NV 89115  
📞 **Phone**: (702) 491-4514  
🌐 **Website**: [https://tuneupslasvegas.com/mechanic](https://tuneupslasvegas.com/mechanic)

---

## 🏎️ Key Features

- **Industrial-Premium Aesthetic**: Dark slate/graphite foundation with crisp content cards, performance amber (`#f59e0b`), and electric blue (`#0284c7`) accents.
- **Dynamic Real-Time Shop Hours**: Live open/closed tracking calculating Las Vegas Pacific Time schedule (`Mon–Fri: 8AM–5PM`, `Sat: 9AM–5PM`, `Sun: Closed`).
- **Interactive Vehicle Symptom Diagnostic Assistant**: Drivers can click what they hear or feel (*Squealing Brakes*, *Warm A/C*, *Check Engine Light*, *Engine Overheating*, *Transmission Slip*, *Steering Pull*) for instant triage and 1-click booking.
- **Instant Estimate & Booking Engine**: Multi-step interactive modal with date validation, vehicle selector, and instant SMS confirmation toasts.
- **Core Services Catalog**: Interactive cards for Engine Diagnostics, Brake Systems, Desert Climate A/C & Cooling, Factory Scheduled Maintenance, Transmission & Drivetrain, and Auto Body/Glass.
- **Mobile-First UX**:
  - Sticky emergency calling for stranded drivers
  - Floating bottom action bar (*Call Now*, *Directions*, *Book Slot*)
  - Slide-in navigation drawer with backdrop
  - Touch-friendly horizontal swipeable chips
  - iOS auto-zoom prevention (`16px` font-size)
- **Local SEO & Schema.org**: Complete `AutoRepair` JSON-LD structured data with geo coordinates, opening hours, review metrics, and accepted payment types.

---

## 📁 Repository Structure

```
glens-auto-repair/
├── index.html                 # Semantic HTML5 single-page redesign + Schema.org JSON-LD
├── css/
│   └── style.css              # Custom styling, mobile-first queries & design tokens
├── js/
│   ├── app.js                 # Live hours tracker, appointment modal, mobile drawer, toasts
│   └── diagnostic-tool.js     # Interactive symptom diagnostic assistant logic
├── server.js                  # Lightweight Node.js static server
├── .gitignore
└── README.md
```

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/mandraxor/glenns-auto-repair.git

# Navigate to project directory
cd glenns-auto-repair

# Run with Node.js
node server.js
# Or run with Python
python -m http.server 3113

# Open in browser
http://localhost:3113
```

---

## 📜 License
MIT License. Created for Glenn's Automotive Repair and Maintenance.
