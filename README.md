# 🏠 Interior Design Website

A **responsive and accessible interior design website** built as part of MCA Web Technology project.  
The website showcases interior design galleries, services, and includes multiple forms (booking, feedback, contact) with validation and accessibility support.  

---

## ✨ Features
- Responsive design (mobile-first, desktop, tablet friendly).  
- Accessible forms with ARIA roles, labels, and keyboard navigation.  
- Gallery page with responsive image grid and alt text for every design.  
- Booking/Consultation form with date, time, radio buttons, checkboxes, and range slider.  
- Feedback page with star ratings and textarea.  
- Contact page with form and embedded Google Maps.  
- Semantic HTML5 structure (header, nav, section, article, footer).  

---
## 📌 Project Scope – *Interior Design Website*

### 🔹 Pages & Modules (so 4 members can split easily)

1. **Home Page**

   * Hero section with intro.
   * Navigation bar & footer.
   * Featured interior designs (cards).

2. **Gallery Page (Interior Designs Showcase)**

   * Responsive image grid / masonry layout.
   * Filters by room type (living room, bedroom, kitchen, office, etc.).
   * Accessible: alt text for every image, ARIA roles.

3. **Services Page**

   * List of services (3D design, renovation, furniture customization, etc.).
   * Each service displayed in responsive cards.

4. **About Us Page**

   * Company info, team intro, mission statement.
   * Accessible structure with semantic tags.

5. **Contact Page**

   * Contact form (name, email, phone, message, service type dropdown).
   * Map/location (embed Google Maps iframe).

6. **Booking/Consultation Form Page**

   * Form for booking interior design consultation.
   * Inputs: name, email, phone, date, time, type of design (radio/checkbox), budget range (slider).

7. **Feedback Page**

   * Feedback form with star rating, textarea, and optional file upload.

8. **Login/Sign-up Page** *(optional if time remains)*

   * Form for users to sign up/log in.
   * Just frontend, can extend later.

---

## 📂 Project Structure
```

interior-design-website/
├── index.html             # Home Page
├── gallery.html           # Gallery Page
├── services.html          # Services Page
├── about.html             # About Us Page
├── contact.html           # Contact Page
├── booking.html           # Booking Page
├── feedback.html          # Feedback Page
├── login.html             # Login Page (optional)
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # Main JavaScript
│   ├── images/            # Gallery images
│   └── fonts/             # Custom fonts
└── README.md

```
---

## 👥 Suggested Team Role Division

* **Member 1:** Home Page + Navigation + Footer (responsive header/footer, hero section).
* **Member 2:** Gallery Page + Services Page (image grids, service cards).
* **Member 3:** Booking/Consultation Form + Feedback Form (forms with validations & accessibility).
* **Member 4:** About Us Page + Contact Page (contact form, map, accessibility testing).

👉 Later, all work together to **integrate pages into one project** and test responsiveness.

---
## File & Naming Conventions

  * **HTML files:** lowercase, hyphen-separated → `about.html`, not `AboutUs.html`.
  * **CSS files:** lowercase → `style.css`, `responsive.css` (if split).
  * **JS files:** lowercase → `script.js`, `form-validation.js`.
  * **Images:** descriptive names → `living-room-1.jpg`, `kitchen-modern.jpg`.
  * **Classes/IDs:** kebab-case → `.nav-bar`, `#feedback-form`.
  * **Commits:** use short descriptive messages → `Added gallery page with responsive grid`.

---

## 🚀 How to Run
1. Clone the repository:  
```bash
git clone https://github.com/jithesh-poojari/interior-design-website.git
```

2. Open `index.html` in any browser.

---

## 🛠️ Tech Stack

* HTML5
* CSS3 (Flexbox, Grid, Media Queries)
* JavaScript (Form validation, interactivity)

---

## 🔮 Future Enhancements

* Add backend (Node.js/Express) for storing form submissions.
* Admin dashboard for managing gallery images and services.
* User login & authentication system.

---
