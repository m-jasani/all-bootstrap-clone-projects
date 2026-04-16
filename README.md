# 🎨 Bootstrap UI Clone Projects

> **Internship Training Series** — Real-world UI clones built during my internship at **Azziptech**, focused on mastering responsive layouts, Bootstrap's grid system, and React component architecture.

---

## 📌 Overview

This repository is a curated collection of **production-style website clones**, each built from scratch to replicate real-world UI designs. The goal was to sharpen front-end development fundamentals — pixel-perfect layouts, responsive breakpoints, and reusable component design — in a real professional environment.

| Project | Description | Key Highlight |
|---|---|---|
| 🏢 **Azziptech** | Corporate tech company website clone | Multi-section landing page with dynamic sliders |
| 🌙 **Midnight** | Dark-themed Bootstrap template clone | Full-page hero, card grids, smooth sections |
| 📋 **SSCCM** | Institutional/organizational website clone | Structured content layout, nav, responsive tables |

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Libraries Used:**
- `react-slick` + `slick-carousel` — Image carousels & sliders
- `React 18` — Component-based architecture
- `Bootstrap 5` — Grid system, utility classes, responsive layout

---

## 📁 Project Structure

```
all-bootstrape-clone-projects/
│
├── public/                  # Static assets
│
├── src_azziptech/           # 🏢 Azziptech website clone
│   ├── components/
│   └── App.js
│
├── src_midnight/            # 🌙 Midnight dark theme clone
│   ├── components/
│   └── App.js
│
├── src_ssccm/               # 📋 SSCCM institutional clone
│   ├── components/
│   └── App.js
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 14.x
- npm ≥ 6.x

### Installation

```bash
# Clone the repository
git clone https://github.com/m-jasani/all-bootstrape-clone-projects.git

# Navigate into the project
cd all-bootstrape-clone-projects

# Install dependencies
npm install
```

### Running a Project

By default, the app runs the currently configured source. To switch between clones, update the `src` reference in `package.json` or `index.js` to point to the desired folder (`src_azziptech`, `src_midnight`, or `src_ssccm`).

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🔍 Project Breakdown

### 🏢 Azziptech Clone (`src_azziptech`)
A full corporate tech company website clone modeled after the Azziptech platform. Built during day-to-day internship tasks to understand how professional company sites are structured using React and Bootstrap.

**Features:**
- Hero section with `react-slick` image slider
- Services/features card grid using Bootstrap's 12-column layout
- Fully responsive across mobile, tablet, and desktop
- Navigation bar with responsive hamburger menu

---

### 🌙 Midnight Clone (`src_midnight`)
A dark-themed Bootstrap template clone showcasing a modern SaaS or portfolio-style landing page.

**Features:**
- Full-viewport dark hero section
- Feature highlight sections with icon cards
- Smooth content flow with Bootstrap utility spacing
- Responsive footer with multi-column layout

---

### 📋 SSCCM Clone (`src_ssccm`)
An institutional/organizational website clone with structured content, emphasizing layout precision and information hierarchy.

**Features:**
- Header with logo, navigation links, and contact info
- Content-rich sections with proper typographic hierarchy
- Responsive data layout and structured information blocks
- Clean, accessible design patterns

---

## 💡 Key Learnings

- ✅ Mastered **Bootstrap 5 grid system** — `container`, `row`, `col-*` breakpoints across all screen sizes
- ✅ Integrated **react-slick** for production-grade carousels and hero sliders
- ✅ Built **reusable React components** from visual design references
- ✅ Applied **responsive design** principles — mobile-first, fluid layouts
- ✅ Developed discipline for **clean folder structure** within a monorepo-style React workspace
- ✅ Translated real-world design mockups into pixel-accurate code

---

## 👩‍💻 About

Built by **Meera Jasani** during her internship at **Azziptech** as part of front-end training assignments. These projects laid the foundation for working on production B2B applications using React, Next.js, and Tailwind CSS.

🔗 [Portfolio](https://portfolio-rouge-three-19.vercel.app/) • [LinkedIn](https://www.linkedin.com/in/meera-jasani) • [GitHub](https://github.com/m-jasani)

---

> *"The best way to learn front-end development is to clone what you see — then understand why it works."*
